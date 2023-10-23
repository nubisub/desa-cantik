import * as React from "react";
import HomePage from "@/app/components/home/HomePage";

export const revalidate = 1800;

async function getDataChart() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/disabilitas/chart`
  );
  return res.json();
}

async function getTipeDisabilitas() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/disabilitas/tipe-disabilitas`
  );
  return res.json();
}
export default async function Home() {
  const chartDisabilitas = await getDataChart();
  const tipeDisabilitas = await getTipeDisabilitas();
  return (
    <HomePage
      tipeDisabilitas={tipeDisabilitas}
      chartDisabilitas={chartDisabilitas}
    />
  );
}
