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
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
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
