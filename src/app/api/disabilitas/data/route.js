import { NextResponse } from "next/server";
import { google } from "googleapis";
import auth from "@/app/services/google";
import { JWT } from "google-auth-library";
import { GoogleSpreadsheet } from "google-spreadsheet";

// This API route is used to get data from Google Sheets with the following conditions:
// 1. The data is from the sheet named "Disabilitas"
// 2. The data is from the columns with the following names:
//    - Nama
//    - NIK
//    - NOKK
//    - Alamat
//    - Kemiskinan
//    - Kedisabilitasan
// 3. The data is from the rows with the following conditions:
//    - The row is not empty
//    - The row is not the first row (the row with the column names)
// 4. The data is mapped to an array of objects with the following keys:
//    - Nama
//    - NIK
//    - NOKK
//    - Alamat
//    - Kemiskinan
//    - Kedisabilitasan
// 5. The data is returned as JSON
//  [{
//    Nama: "John Doe",
//    NIK: "XXXXXXXXXXXXXXXX",
//    NOKK: "XXXXXXXXXXXXXXXX",
//    Alamat: "XXXXXXXXXXXXXXXX
//    Kemiskinan: "XXXXXXXXXXXXXXXX",
//    Kedisabilitasan: "XXXXXXXXXXXXXXXX"
//  }],
export const revalidate = 5;
export async function GET(request) {
  const spreadsheetId = process.env.GOOGLE_SPREASHEET_ID;
  const sheets = google.sheets({ version: "v4", auth });

  const includedColumns = [
    "Nama",
    "NIK",
    "NOKK",
    "Alamat",
    "Kedisabilitasan",
    "Kemiskinan",
  ];

  const getMetaData = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "Disabilitas!A:Z",
  });

  const data = getMetaData.data.values;
  const headers = data[0];
  const rows = data.slice(1);
  const includedColumnIndexes = includedColumns.map((column) =>
    headers.indexOf(column)
  );
  const filteredRows = rows.map((row) =>
    row.filter((_, index) => includedColumnIndexes.includes(index))
  );
  const mappedData = filteredRows.map((row) => {
    const mappedRow = {};
    row.forEach((value, index) => {
      mappedRow[includedColumns[index]] = value;
    });
    return mappedRow;
  });

  // add row index to data
  mappedData.map((data, index) => {
    data.indexRow = index + 1;
  });

  return NextResponse.json(mappedData);
}

export async function DELETE(request) {
  try {
    const { index } = await request.json();

    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const doc = new GoogleSpreadsheet(
      process.env.GOOGLE_SPREASHEET_ID,
      serviceAccountAuth
    );
    await doc.loadInfo(); // loads document properties and worksheets

    const sheet = doc.sheetsByIndex[1]; // or use doc.sheetsById[id]

    const rows = await sheet.getRows();

    await rows[index - 1].delete();

    return NextResponse.json(
      {
        message: "Delete Data Success",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Delete Data Failed",
      },
      {
        status: 500,
      }
    );
  }
}
