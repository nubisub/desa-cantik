import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Table from "@mui/joy/Table";
import * as React from "react";
import Skeleton from "@mui/joy/Skeleton";

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
            No KK
          </th>
          <th
            style={{
              width: 220,
              padding: "12px 6px",
              fontWeight: "600",
              fontSize: "1.1em",
            }}
          >
            Alamat
          </th>
          <th
            style={{
              width: 140,
              padding: "12px 6px",
              fontWeight: "600",
              fontSize: "1.1em",
            }}
          >
            Kedisabilitasan
          </th>
          <th
            style={{
              width: 140,
              padding: "12px 6px",
              fontWeight: "600",
              fontSize: "1.1em",
            }}
          >
            Kemiskinan
          </th>
          <th
            style={{
              width: 60,
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
                <div>
                  <Typography>
                    <Skeleton>Nama Anada naa</Skeleton>
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
              <Typography>
                <Skeleton>1234567891234567</Skeleton>
              </Typography>
            </td>
            <td>
              <Typography sx={{ textTransform: "capitalize" }}>
                <Typography>
                  <Skeleton>111111111111111111111</Skeleton>
                </Typography>
              </Typography>
            </td>
            <td>
              <Typography sx={{ textTransform: "capitalize" }}>
                <Typography>
                  <Skeleton>111111111111111111</Skeleton>
                </Typography>
              </Typography>
            </td>
            <td>
              <Typography sx={{ textTransform: "capitalize" }}>
                <Typography>
                  <Skeleton>1111111111111111</Skeleton>
                </Typography>
              </Typography>
            </td>
            <td>
              <Typography />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
