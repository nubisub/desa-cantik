import * as React from "react";
import Page1 from "@/app/components/home/Page-1";
import Page2 from "@/app/components/home/Page-2";
import Page3 from "@/app/components/home/Page-3";
import Page4 from "@/app/components/home/Page-4";
import Footer from "@/app/components/home/Footer";
import BackToTop from "@/app/components/home/BackToTop";
import ProgressBar from "@/app/components/home/ProgressBar";

export default function Home() {
  return (
    <>
      <ProgressBar />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
      <Footer />
      <BackToTop />
    </>
  );
}
