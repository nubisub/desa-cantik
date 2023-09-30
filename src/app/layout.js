import * as React from "react";
import { DM_Sans } from "next/font/google";
import CssBaseline from "@mui/joy/CssBaseline";
import { NextAuthProvider } from "./components/AuthProvider";

const dm_sans = DM_Sans({ weight: "400", subsets: ["latin"] });
export const metadata = {
  title: "Desa Cantik - Margoagung",
  description: "Desa Cantik Margoagung Kabupaten Sleman",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      style={{
        scrollBehavior: "smooth",
      }}
    >
      <body style={{ margin: 0 }}>
        <NextAuthProvider>
          <CssBaseline />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
