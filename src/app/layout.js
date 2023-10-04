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
        <title>Desa Cinta Statistik</title>
        <link
          rel="icon"
          href="https://desa-cantik.vercel.app/favicon.ico"
          sizes="any"
        />
        <meta
          name="google-site-verification"
          content="Hu7152qpJj9Y6ul5jzX2k4B3IVxATZm21UlTbhS2iEc"
        />
        <meta name="title" content="Desa Cinta Statistik" />
        <meta
          name="description"
          content="Jelajahi Desa Cinta Statistik: Pintu untuk Pengentasan Kemiskinan di Desa Margoagung, Kabupaten Sleman. Temukan solusi dan inisiatif berbasis data yang bertujuan untuk memberantas kemiskinan dan mendorong pembangunan berkelanjutan."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://desa-cantik.vercel.app/og.png"
        />
        <meta property="og:title" content="Desa Cinta Statistik" />
        <meta
          property="og:description"
          content="Jelajahi Desa Cinta Statistik: Pintu untuk Pengentasan Kemiskinan di Desa Margoagung, Kabupaten Sleman. Temukan solusi dan inisiatif berbasis data yang bertujuan untuk memberantas kemiskinan dan mendorong pembangunan berkelanjutan."
        />
        <meta
          property="og:image"
          content="https://desa-cantik.vercel.app/og.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://desa-cantik.vercel.app/og.png"
        />
        <meta property="twitter:title" content="Desa Cinta Statistik" />
        <meta
          property="twitter:description"
          content="Jelajahi Desa Cinta Statistik: Pintu untuk Pengentasan Kemiskinan di Desa Margoagung, Kabupaten Sleman. Temukan solusi dan inisiatif berbasis data yang bertujuan untuk memberantas kemiskinan dan mendorong pembangunan berkelanjutan."
        />
        <meta
          property="twitter:image"
          content="https://desa-cantik.vercel.app/og.png"
        />
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
