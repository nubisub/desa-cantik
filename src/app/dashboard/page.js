import * as React from "react";
import Breadcrumbs from "@/app/components/BreadCrumbs";
import Box from "@mui/joy/Box";
import CardDashboard from "@/app/components/Card";
import { Card, CardContent } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip from "@mui/joy/Tooltip";
import Chart from "@/app/components/Chart";

export const revalidate = 10;

// export const dynamic = "force-dynamic";
async function getDataBLT() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API + "?endpoint=jumlah-penerima-blt"
  );
  return res.json();
}
async function getDataDisabilitas() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API + "?endpoint=jumlah-disabilitas"
  );
  return res.json();
}

async function getDataChart() {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API + "?endpoint=chart-disabilitas"
  );
  return res.json();
}
export default async function Home() {
  const dataBLT = await getDataBLT();
  const dataDisabilitas = await getDataDisabilitas();
  const chartDisabilitas = await getDataChart();

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
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 2,
        }}
      >
        <CardDashboard
          BLT={dataBLT?.data}
          Disabilitas={dataDisabilitas?.data}
        />
      </Box>
      <Box
        sx={{
          my: 2,
        }}
      >
        <Card
          sx={{
            height: {
              xs: 400,
              sm: 400,
              xl: 500,
            },
            width: "100%",
            pb: 8,
          }}
          variant="outlined"
          invertedColors
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
            orientation="horizontal"
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: "500",
                  color: "text.primary",
                }}
                variant="h6"
              >
                Ragam Penyandang Disabilitas
              </Typography>
              <Tooltip
                title="Jumlah Penyandang Disabilitas Menurut Jenisnya"
                variant="solid"
                placement="top"
              >
                <InfoOutlinedIcon
                  sx={{
                    fontSize: "1.1rem",
                    cursor: "pointer",
                  }}
                />
              </Tooltip>
            </CardContent>
            <Chart chartData={chartDisabilitas} />
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
