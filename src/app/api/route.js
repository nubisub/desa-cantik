import { NextResponse } from "next/server";

export async function GET(request) {
  return NextResponse.json({
    message: "This is root for my API, what are you looking for? a cookie?",
  });
}
