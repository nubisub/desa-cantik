import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import Skeleton from "@mui/joy/Skeleton";
import * as React from "react";

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
              width: 140,
              padding: "12px 6px",
              fontWeight: "600",
              fontSize: "1.1em",
            }}
          >
            Nama
          </th>
          <th
            style={{
              width: 140,
              padding: "12px 6px",
              fontWeight: "600",
              fontSize: "1.1em",
            }}
          >
            NIK
          </th>
          <th
            style={{
              width: 140,
              padding: "12px 6px",
              fontWeight: "600",
              fontSize: "1.1em",
            }}
          >
            Penerima BLT
          </th>
          <th
            style={{
              width: 220,
              padding: "12px 6px",
              fontWeight: "600",
              fontSize: "1.1em",
            }}
          >
            Penyandang Disabilitas
          </th>
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
              <Typography sx={{ textTransform: "capitalize" }}>
                <Skeleton>Nama Orang Yang ada</Skeleton>
              </Typography>
            </td>
            <td>
              <Typography>
                <Skeleton>1234567891234567</Skeleton>
              </Typography>
            </td>

            <td>
              <Typography sx={{ textTransform: "capitalize" }}>
                <Skeleton>chippp</Skeleton>
              </Typography>
            </td>
            <td>
              <Typography sx={{ textTransform: "capitalize" }}>
                <Skeleton>chippp</Skeleton>
              </Typography>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
