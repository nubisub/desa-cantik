import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
    }),
  ],
  adapter: FirestoreAdapter({
    credential: cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID1,
      clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL1,
      privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY1.replace(
        /\\n/g,
        "\n"
      ),
    }),
  }),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  callbacks: {
    async session({ session, token, user }) {
      session.user.id = token.sub;
      session.user.role = token.role;
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      if (user) {
        token = { ...token, role: user.role };
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
