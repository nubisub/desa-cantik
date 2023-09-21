import * as React from "react";
import Box from "@mui/joy/Box";
import Breadcrumbs from "/src/app/components/BreadCrumbs";
import Typography from "@mui/joy/Typography";
import Table from "@/app/dashboard/penyandang-disabilitas/Table";
// icons

// export const dynamic = "force-dynamic";
export const revalidate = 5;
async function getData() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API + "?endpoint=daftar-disabilitas"
  );
  return res.json();
}
async function getDataFilterKedisabilitasan() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API + "?endpoint=list-disabilitas"
  );
  return res.json();
}

async function getDataFilterKemiskinan() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API + "?endpoint=list-kemiskinan"
  );
  return res.json();
}

export default async function ProgramKeluargaHarapan() {
  const data = await getData();
  const listKemiskinan = await getDataFilterKemiskinan();
  const listDisabilitas = await getDataFilterKedisabilitasan();

  return (
    <>
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
        {/*<Button*/}
        {/*  color="primary"*/}
        {/*  startDecorator={<DownloadRoundedIcon />}*/}
        {/*  size="sm"*/}
        {/*>*/}
        {/*  Download PDF*/}
        {/*</Button>*/}
      </Box>

      <Table
        listKemiskinan={listKemiskinan.data}
        listDisabilitas={listDisabilitas.data}
        data={data}
      />
    </>
  );
}
