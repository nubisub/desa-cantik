import { withAuth } from "next-auth/middleware";

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {},
  {
    callbacks: {
      authorized({ req, token }) {
        return token;
      },
    },
  }
);

export const config = {
  matcher: ["/dashboard/:path*"],
};
