import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const role = req.nextauth.token.role;

    // Just Admin can access this page
    // Pages that just Admin can access:
    if (
      req.nextUrl.pathname === "/dashboard/kelola-pengguna" &&
      role !== "Admin"
    ) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    // APIs that just Admin can access:
    if (req.nextUrl.pathname === "/api/pengguna/data" && role !== "Admin") {
      return NextResponse.json(
        {
          status: "error",
          message:
            "Please dont do this, im not paid enough to handle this.  If you interested to hire me, please contact me at github.com/nubisub",
        },
        {
          status: 401,
        }
      );
    }

    // Guest can't access this page
    //   Pages that Guest can't access:
    if (
      (role === "Guest" || typeof role === "undefined") &&
      (req.nextUrl.pathname === "/dashboard/penyandang-disabilitas" ||
        req.nextUrl.pathname === "/dashboard/bantuan-langsung-tunai" ||
        req.nextUrl.pathname === "/dashboard/data-gabungan")
    ) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    // APIs that Guest can't access:
    if (
      (role === "Guest" || typeof role === "undefined") &&
      (req.nextUrl.pathname === "/api/bantuan/data" ||
        req.nextUrl.pathname === "/api/disabilitas/data" ||
        req.nextUrl.pathname === "/api/gabungan/data")
    ) {
      return NextResponse.json(
        {
          status: "error",
          message:
            "Please dont do this, im not paid enough to handle this.  If you interested to hire me, please contact me at github.com/nubisub",
        },
        {
          status: 401,
        }
      );
    }
  },

  {
    callbacks: {
      authorized({ req, token }) {
        return token;
      },
    },
  }
);

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/api/bantuan/data",
    "/api/disabilitas/data",
    "/api/pengguna/data",
    "/api/pengguna/roles",
    "/api/gabungan/data",
  ],
};
