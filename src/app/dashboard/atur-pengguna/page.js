import Box from "@mui/joy/Box";
import Breadcrumbs from "/src/app/components/BreadCrumbs";
import Typography from "@mui/joy/Typography";
import WrapperData from "@/app/dashboard/atur-pengguna/WrapperData";

// icons
async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pengguna/data`);
  return res.json();
}
async function getDataFilterRoles() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pengguna/roles`);
  return res.json();
}

export default async function AturPengguna() {
  const dataPengguna = await getData();
  const listRoles = await getDataFilterRoles();

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
              label: "Atur Pengguna",
              href: "/atur-pengguna",
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
        <Typography level="h2">Atur Pengguna</Typography>
      </Box>
      <WrapperData />
    </>
  );
}
