import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Avatar from "@mui/joy/Avatar";
import Tooltip from "@mui/joy/Tooltip";
import IconButton from "@mui/joy/IconButton";
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
              width: 240,
              padding: "12px 6px",
              fontWeight: "600",
              fontSize: "1.1em",
            }}
          >
            Email
          </th>
          <th
            style={{
              width: 100,
              padding: "12px 6px",
              fontWeight: "600",
              fontSize: "1.1em",
            }}
          >
            Role
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
                  <Typography>
                    <Skeleton>Nama Orang Yang ada</Skeleton>
                  </Typography>
                </div>
              </Box>
            </td>
            <td>
              <Typography>
                <Skeleton>john.doewer@yahoomail.com</Skeleton>
              </Typography>
            </td>
            <td>
              <Typography>
                <Skeleton>Admin</Skeleton>
              </Typography>
            </td>
            <td>
              <Tooltip
                arrow
                title="Kelola Akun"
                placement="left"
                size="sm"
                variant="outlined"
              >
                <IconButton color={"primary"} size={"sm"} variant={"soft"}>
                  <Skeleton />
                </IconButton>
              </Tooltip>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
