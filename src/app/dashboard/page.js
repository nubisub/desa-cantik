import Breadcrumbs from "@/app/components/BreadCrumbs";
import Box from "@mui/joy/Box";
import CardDashboard from "@/app/components/Card";
import CardWrapper from "@/app/components/CardWrapper";

export const revalidate = 1800;
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

      <CardWrapper
        tipeDisabilitas={tipeDisabilitas}
        chartDisabilitas={chartDisabilitas}
      />
    </>
  );
}
