import { withAuth } from "next-auth/middleware";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token);
  },
  {
    callbacks: {
      authorized({ req, token }) {
        if (token) return true;
      },
    },
  }
);

export const config = { matcher: ["/dashboard/:path*"] };
