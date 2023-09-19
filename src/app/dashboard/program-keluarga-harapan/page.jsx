import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Breadcrumbs from "/src/app/components/BreadCrumbs";
import Typography from "@mui/joy/Typography";
import Table from "@/app/dashboard/program-keluarga-harapan/Table";
// icons
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";

export const dynamic = "force-dynamic";

async function getData() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API + "?endpoint=daftar-penerima-blt"
  );
  return res.json();
}

export default async function ProgramKeluargaHarapan() {
  const data = await getData();

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
              label: "Program Keluarga Harapan",
              href: "/program-keluarga-harapan",
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
        <Typography level="h2">
          Daftar Penerima Program Keluarga Harapan
        </Typography>
        <Button
          color="primary"
          startDecorator={<DownloadRoundedIcon />}
          size="sm"
        >
          Download PDF
        </Button>
      </Box>

      <Table data={data} />
    </>
  );
}
