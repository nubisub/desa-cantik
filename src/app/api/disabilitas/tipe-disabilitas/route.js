import { NextResponse } from "next/server";
import { google } from "googleapis";
import auth from "@/app/services/google";

export const revalidate = 86400;

export async function GET(request) {
  const spreadsheetId = process.env.GOOGLE_SPREASHEET_ID;

  const sheets = google.sheets({ version: "v4", auth });

  const includedColumns = ["Kedisabilitasan"];

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
  // find unique values in Kedisabilitasan column and make Kedisabilitasan as array of ojects
  const uniqueKedisabilitasan = [
    ...new Set(mappedData.map((item) => item.Kedisabilitasan)),
  ];
  const kedisabilitasan = uniqueKedisabilitasan.map((item) => {
    return { Kedisabilitasan: item };
  });
  return NextResponse.json(kedisabilitasan);
}
