"use client";
import ProgressBar from "@/app/components/home/ProgressBar";
import Navbar from "@/app/components/home/Navbar";
import Page1 from "@/app/components/home/Page-1";
import Page2 from "@/app/components/home/Page-2";
import Page3 from "@/app/components/home/Page-3";
import Page4 from "@/app/components/home/Page-4";
import Page5 from "@/app/components/home/Page-5";
import Footer from "@/app/components/home/Footer";
import * as React from "react";

export default function HomePage() {
  const [idPath, setIdPath] = React.useState("");

  return (
    <>
      <ProgressBar />
      <Navbar idPath={idPath} setPath={setIdPath} />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Footer />
    </>
  );
}
