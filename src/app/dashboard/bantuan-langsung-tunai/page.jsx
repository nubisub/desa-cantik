// "use client";
import * as React from "react";
import Box from "@mui/joy/Box";
import Breadcrumbs from "/src/app/components/BreadCrumbs";
import Typography from "@mui/joy/Typography";
import Add from "@/app/dashboard/bantuan-langsung-tunai/Add";
import WrapperData from "@/app/dashboard/bantuan-langsung-tunai/WrapperData";

export default function ProgramKeluargaHarapan() {
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
              label: "Bantuan Langsung Tunai DD",
              href: "/bantuan-langsung-tunai",
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
          Daftar Penerima Bantuan Langsung Tunai DD
        </Typography>
        <Add />
      </Box>
      <WrapperData />
    </>
  );
}
