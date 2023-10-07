import * as React from "react";
import Box from "@mui/joy/Box";
import Breadcrumbs from "/src/app/components/BreadCrumbs";
// icons
import WrapperData from "@/app/dashboard/penyandang-disabilitas/WrapperData";

export default async function ProgramKeluargaHarapan() {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
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

      <WrapperData />
    </>
  );
}
