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
      <head>
        <meta
          property="twitter:image"
          content="https://desa-cantik.vercel.app/api/og"
        ></meta>
        <meta property="twitter:card" content="summary"></meta>
        <meta
          property="twitter:title"
          content="Desa Cantik - Margoagung"
        ></meta>
        <meta
          property="twitter:description"
          content="Desa Cantik Margoagung Kabupaten Sleman"
        ></meta>
        <meta
          property="og:image"
          content="https://desa-cantik.vercel.app/api/og"
        ></meta>
        <meta property="og:title" content="Desa Cantik - Margoagung"></meta>
        <meta
          property="og:description"
          content="Desa Cantik Margoagung Kabupaten Sleman"
        />

        <meta
          property="og:image"
          content="https://desa-cantik.vercel.app/api/og"
        ></meta>
        <meta property="og:title" content="Desa Cantik - Margoagung"></meta>
        <meta
          property="og:description"
          content="Desa Cantik Margoagung Kabupaten Sleman"
        />
        <meta
          property="og:url"
          content="https://desa-cantik.vercel.app/"
        ></meta>
      </head>
      <body style={{ margin: 0 }}>
        <NextAuthProvider>
          <CssBaseline />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}
