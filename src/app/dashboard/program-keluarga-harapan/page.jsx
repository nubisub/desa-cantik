// "use client";
import * as React from "react";
import Box from "@mui/joy/Box";
import Breadcrumbs from "/src/app/components/BreadCrumbs";
import Typography from "@mui/joy/Typography";
import Add from "@/app/dashboard/program-keluarga-harapan/Add";
import WrapperData from "@/app/dashboard/program-keluarga-harapan/WrapperData";

export default function ProgramKeluargaHarapan() {
  // const [open, setOpen] = React.useState(false);
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
        <Add />
      </Box>
      <WrapperData />
    </>
  );
}
