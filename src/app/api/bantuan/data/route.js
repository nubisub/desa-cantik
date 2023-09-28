import { NextResponse } from "next/server";
import { google } from "googleapis";
import auth from "@/app/services/google";
import { auth2 } from "@/app/services/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export const revalidate = 5;
export async function GET(request) {
  const user = await onAuthStateChanged(auth2, (user) => {
    if (user) {
      return user;
    } else {
      return null;
    }
  });
  const spreadsheetId = process.env.GOOGLE_SPREASHEET_ID;
  const sheets = google.sheets({ version: "v4", auth });

  const includedColumns = ["NIK", "KepalaKeluarga", "Alamat"];

  const getMetaData = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "BLT!A:Z",
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

  // add index to data
  mappedData.map((data, index) => {
    data.indexRow = index + 1;
  });

  return NextResponse.json(mappedData);
}

// function to create data in google sheet using google sheet api in last row using post method that receive data from client
export async function POST(request) {
  try {
    const { NIK, KepalaKeluarga, Alamat } = await request.json();
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

    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]

    // add new row
    await sheet.addRow({
      NIK: NIK,
      KepalaKeluarga: KepalaKeluarga,
      Alamat: Alamat,
    });

    return NextResponse.json(
      {
        message: "Insert Data Success",
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Insert Data Failed",
      },
      {
        status: 500,
      }
    );
  }
}

// delete data with delete method that receive data from client NIK
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

    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]

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
