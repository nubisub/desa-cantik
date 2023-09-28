import Breadcrumbs from "@/app/components/BreadCrumbs";
import Box from "@mui/joy/Box";
import CardDashboard from "@/app/components/Card";
import { Card, CardContent } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip from "@mui/joy/Tooltip";
import Chart from "@/app/components/Chart";

export const revalidate = 86400; // revalidate at most every 30 seconds
async function getDataBLT() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/bantuan/jumlah`);
  return res.json();
}
async function getDataDisabilitas() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/disabilitas/jumlah`
  );
  return res.json();
}

async function getDataChart() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/disabilitas/chart`
  );
  return res.json();
}

async function getTipeDisabilitas() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_HOST}/api/disabilitas/tipe-disabilitas`
  );
  return res.json();
}
export default async function Home() {
  const countBantuan = await getDataBLT();
  const countDisabilitas = await getDataDisabilitas();
  const chartDisabilitas = await getDataChart();
  const tipeDisabilitas = await getTipeDisabilitas();
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
          BLT={countBantuan?.count}
          Disabilitas={countDisabilitas?.count}
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
            <Chart
              tipeDisabilitas={tipeDisabilitas}
              chartData={chartDisabilitas}
            />
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
