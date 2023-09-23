import { NextResponse } from "next/server";
import { google } from "googleapis";
import auth from "@/app/services/google";
import { auth2 } from "@/app/services/firebase";
import { onAuthStateChanged } from "firebase/auth";

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
  return NextResponse.json(user);
}
