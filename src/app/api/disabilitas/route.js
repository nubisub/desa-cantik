import { NextResponse } from "next/server";

export async function GET(request) {
  //   push to /api
  return NextResponse.redirect("/api");
}
