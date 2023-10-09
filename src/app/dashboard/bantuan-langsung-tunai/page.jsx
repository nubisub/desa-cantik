// "use client";
import * as React from "react";
import Box from "@mui/joy/Box";
import Breadcrumbs from "/src/app/components/BreadCrumbs";
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

      <WrapperData />
    </>
  );
}
