import { NextResponse } from "next/server";
import { google } from "googleapis";
import auth from "@/app/services/google";

export async function GET(request) {
  const spreadsheetId = process.env.GOOGLE_SPREASHEET_ID;

  const sheets = google.sheets({ version: "v4", auth });

  const includedColumns = ["JenisDisabilitas", "Kedisabilitasan"];

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

  // give me data like this
  // [
  //   {
  //     JenisDisabilitas: "Tuna Netra",
  //     buta: "1",
  //     rabun: "0",
  //    }
  // ]
  const Kedisabilitasan = [
    ...new Set(mappedData.map((item) => item.Kedisabilitasan)),
  ];
  const JenisKedisabilitasan = [
    ...new Set(mappedData.map((item) => item.JenisDisabilitas)),
  ];
  const combine = [];
  for (let i = 0; i < JenisKedisabilitasan.length; i++) {
    const data = {
      JenisDisabilitas: JenisKedisabilitasan[i],
    };
    for (let j = 0; j < Kedisabilitasan.length; j++) {
      const count = mappedData.filter(
        (item) =>
          item.JenisDisabilitas === JenisKedisabilitasan[i] &&
          item.Kedisabilitasan === Kedisabilitasan[j]
      ).length;
      data[Kedisabilitasan[j]] = count;
    }
    combine.push(data);
  }

  return NextResponse.json(combine);
}
