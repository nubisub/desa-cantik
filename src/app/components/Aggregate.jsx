"use client";

import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";

export default function Aggregate({ data }) {
  return (
    <Sheet
      id={"tabulasi"}
      className="OrderTableContainer"
      variant="outlined"
      sx={{
        mt: 2,
        display: "initial",
        width: "100%",
        borderRadius: "sm",
        flexShrink: 1,
        overflow: "auto",
        minHeight: 0,
      }}
    >
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
        <thead>
          <tr>
            <th
              style={{
                padding: "12px 12px",
                fontWeight: "600",
                fontSize: "1em",
                backgroundColor: "var(--joy-palette-background-level2)",
              }}
            >
              Jenis Disabilitas
            </th>
            <th
              style={{
                padding: "12px 12px",
                fontWeight: "600",
                backgroundColor: "var(--joy-palette-background-level2)",
                fontSize: "1em",
              }}
            >
              Disabilitas
            </th>
            <th
              style={{
                padding: "12px 12px",
                fontWeight: "600",
                backgroundColor: "var(--joy-palette-background-level2)",
                fontSize: "1em",
              }}
            >
              Jumlah
            </th>
          </tr>
        </thead>
        <tbody
          style={{
            fontSize: ".9em",
          }}
        >
          {data.map((item, index) => (
            <>
              {Object.keys(item).map((key, index) => (
                <>
                  {item[key] != 0 && (
                    <tr>
                      {key === "JenisDisabilitas" ? (
                        <td
                          style={{
                            backgroundColor:
                              "var(--joy-palette-background-level1)",
                            fontWeight: "700",
                            fontSize: "1em",
                            padding: "12px 12px",
                          }}
                          colSpan={2}
                        >
                          {item[key]}
                        </td>
                      ) : (
                        <>
                          <td></td>
                        </>
                      )}
                      {key !== "JenisDisabilitas" ? (
                        <>
                          <td>{key}</td>
                          <td>{item[key]}</td>
                        </>
                      ) : (
                        <td
                          style={{
                            backgroundColor:
                              "var(--joy-palette-background-level1)",
                            fontWeight: "700",
                            fontSize: "1em",
                          }}
                        >
                          {
                            //     sum of all items in the object if  key !== "JenisDisabilitas" string to int
                            Object.values(item).reduce(
                              (a, b) => a + (isNaN(b) ? 0 : b),
                              0
                            )
                          }
                        </td>
                      )}
                    </tr>
                  )}
                </>
              ))}
            </>
          ))}
        </tbody>
      </Table>
    </Sheet>
  );
}
