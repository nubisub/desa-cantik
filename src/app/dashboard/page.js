import * as React from "react";
import Breadcrumbs from "@/app/components/BreadCrumbs";
import Box from "@mui/joy/Box";
import CardDashboard from "@/app/components/Card";

export default function Home() {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          items={[
            {
              label: "Dashboard",
              href: "/",
            },
          ]}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 2,
        }}
      >
        <CardDashboard />
        <CardDashboard />
        <CardDashboard />
        <CardDashboard />
      </Box>
    </>
  );
}
