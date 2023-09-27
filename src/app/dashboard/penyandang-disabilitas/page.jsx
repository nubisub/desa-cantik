import * as React from "react";
import Box from "@mui/joy/Box";
import Breadcrumbs from "/src/app/components/BreadCrumbs";
import Typography from "@mui/joy/Typography";
// icons
import Page from "./Wrapper";
import WrapperData from "@/app/dashboard/penyandang-disabilitas/WrapperData";

// export const dynamic = "force-dynamic";
export const revalidate = 1;
async function getData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/disabilitas/data`
  );
  return res.json();
}
async function getDataFilterKedisabilitasan() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/disabilitas/tipe-disabilitas`
  );
  return res.json();
}

async function getDataFilterKemiskinan() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/disabilitas/tipe-kemiskinan`
  );
  return res.json();
}

export default async function ProgramKeluargaHarapan() {
  const data = await getData();
  const listKemiskinan = await getDataFilterKemiskinan();
  const listDisabilitas = await getDataFilterKedisabilitasan();

  return (
    <Page>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          items={[
            {
              label: "Dashboard",
              href: "/dashboard",
            },
            {
              label: "Penyandang Disabilitas",
              href: "/penyandang-disabilitas",
            },
          ]}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          my: 1,
          gap: 1,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "start", sm: "center" },
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Typography level="h2">Daftar Penyandang Disabilitas</Typography>
        {/*<Add />*/}
      </Box>

      {/*<Table*/}
      {/*  listKemiskinan={listKemiskinan}*/}
      {/*  listDisabilitas={listDisabilitas}*/}
      {/*  data={data}*/}
      {/*/>*/}
      <WrapperData />
    </Page>
  );
}
