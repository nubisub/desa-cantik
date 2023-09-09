import { Inter } from "next/font/google";
import Layout from "@/app/components/Layout";
import Navigation from "@/app/components/Navigation";
import * as React from "react";
import ColorScheme from "@/app/components/ColorScheme";
import ThemeRegistry from "@/app/ThemeRegistry";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Desa Cantik : Margoagung",
  description: "Desa Cantik Margoagung Kabupaten Sleman",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry options={{ key: "joy" }}>
          <Layout.Root
            sx={{
              gridTemplateColumns: {
                xs: "1fr",
                sm: "minmax(64px, 200px) minmax(450px, 1fr)",
                md: "minmax(160px, 260px) minmax(600px, 1fr)",
              },
            }}
          >
            <Layout.Header>
              <ColorScheme />
            </Layout.Header>
            <Layout.SideNav>
              <Navigation />
            </Layout.SideNav>
            <Layout.Main>{children}</Layout.Main>
          </Layout.Root>
        </ThemeRegistry>
      </body>
    </html>
  );
}
