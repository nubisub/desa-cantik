import { NextResponse } from "next/server";
import auth from "@/app/services/google";
import { google } from "googleapis";

export const revalidate = 5;

export async function GET(request) {
  const spreadsheetId = process.env.GOOGLE_SPREASHEET_ID;
  const sheets = google.sheets({ version: "v4", auth });

  const getMetaData = await sheets.spreadsheets.values.get({
    auth,
    spreadsheetId,
    range: "BLT!A:Z",
  });

  // get count of my data
  const data = getMetaData.data.values;
  const headers = data[0];
  const rows = data.slice(1);
  const includedColumnIndexes = headers.map((column) =>
    headers.indexOf(column)
  );
  const filteredRows = rows.map((row) =>
    row.filter((_, index) => includedColumnIndexes.includes(index))
  );
  const mappedData = filteredRows.map((row) => {
    const mappedRow = {};
    row.forEach((column, index) => {
      mappedRow[headers[index]] = column;
    });
    return mappedRow;
  });
  const count = mappedData.length;
  return NextResponse.json({
    count: count,
  });
}
