import Box from "@mui/joy/Box";
import Breadcrumbs from "/src/app/components/BreadCrumbs";
import Typography from "@mui/joy/Typography";
import Table from "@/app/dashboard/atur-pengguna/Table";
import Page from "./wrapper";
// icons
export const revalidate = 1;

// export const dynamic = "force-dynamic";
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
    <Page>
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

      <Table listRoles={listRoles.roles} data={dataPengguna.users} />
    </Page>
  );
}
