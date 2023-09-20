"use client";
import * as React from "react";
import Page1 from "@/app/components/home/Page-1";
import Page2 from "@/app/components/home/Page-2";
import Page3 from "@/app/components/home/Page-3";

export default function Home(children) {
  return (
    <>
      <Page1 />
      <Page2 />
      <Page3 />
    </>
  );
}
