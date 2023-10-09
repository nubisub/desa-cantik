import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Skeleton from "@mui/joy/Skeleton";
import Avatar from "@mui/joy/Avatar";

export default function SkeletonTable() {
  return (
    <Table
      aria-labelledby="tableTitle"
      stickyHeader
      hoverRow
      sx={{
        "--TableCell-headBackground": "var(--joy-palette-background-level1)",
        "--Table-headerUnderlineThickness": "1px",
        "--TableRow-hoverBackground": "var(--joy-palette-background-level1)",
        "--TableCell-paddingY": "4px",
        "--TableCell-paddingX": "8px",
      }}
    >
      <thead
        style={{
          fontSize: ".9em",
        }}
      >
        <tr>
          <th
            style={{
              width: 60,
              padding: "12px 18px",
              fontWeight: "600",
              fontSize: "1.1em",
            }}
          >
            No
          </th>
          <th
            style={{
              width: 170,
              padding: "12px 6px",
              fontWeight: "600",
              fontSize: "1.1em",
            }}
          >
            Kepala Keluarga
          </th>
          <th
            style={{
              width: 150,
              padding: "12px 6px",
              fontWeight: "600",
              fontSize: "1.1em",
            }}
          >
            NIK
          </th>

          <th
            style={{
              width: 300,
              padding: "12px 6px",
              fontWeight: "600",
              fontSize: "1.1em",
            }}
          >
            Alamat
          </th>
          <th
            style={{
              width: 50,
              padding: "12px 6px",
              fontWeight: "600",
              fontSize: "1.1em",
            }}
          ></th>
        </tr>
      </thead>
      <tbody
        style={{
          fontSize: ".9em",
        }}
      >
        {Array.from(Array(10).keys()).map((_, i) => (
          <tr key={i}>
            <td>
              <Typography sx={{ pl: "16px", fontWeight: "md" }}>
                <Skeleton>10</Skeleton>
              </Typography>
            </td>
            <td>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Avatar size="sm">
                  <Skeleton />
                </Avatar>
                <div>
                  <Typography sx={{ textTransform: "capitalize" }}>
                    <Skeleton>Nama Orang Yang ada</Skeleton>
                  </Typography>
                </div>
              </Box>
            </td>
            <td>
              <Typography>
                <Skeleton>1234567891234567</Skeleton>
              </Typography>
            </td>

            <td>
              <Typography sx={{ textTransform: "capitalize" }}>
                <Skeleton>Alamat Orang dimana tinggal ya</Skeleton>
              </Typography>
            </td>
            <td></td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
