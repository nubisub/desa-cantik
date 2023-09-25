import { NextResponse } from "next/server";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

export const revalidate = 5;
export async function GET(request) {
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
    NIK: "asdf",
    KepalaKeluarga: "asdf",
    Alamat: "asdf",
  });

  return NextResponse.json({
    title: "asdf",
  });
}
