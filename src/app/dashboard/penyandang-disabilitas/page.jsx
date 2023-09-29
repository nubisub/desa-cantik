import * as React from "react";
import Box from "@mui/joy/Box";
import Breadcrumbs from "/src/app/components/BreadCrumbs";
import Typography from "@mui/joy/Typography";
// icons
import WrapperData from "@/app/dashboard/penyandang-disabilitas/WrapperData";
import Add from "@/app/dashboard/penyandang-disabilitas/Add";

export default async function ProgramKeluargaHarapan() {
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
        <Add />
      </Box>
      <WrapperData />
    </>
  );
}
