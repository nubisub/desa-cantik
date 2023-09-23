"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import { FormControl, FormLabel, Input, Select, selectClasses } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/joy/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Option from "@mui/joy/Option";
import Avatar from "@mui/joy/Avatar";
import { KeyboardArrowDown } from "@mui/icons-material";
import { toast, Toaster } from "sonner";

export default function TablePKH({ data, listRoles, listDisabilitas }) {
  const [rowData, setRowData] = useState(data);
  const [tempData, setTempData] = useState(data);
  const [search, setSearch] = useState("");
  const [rowSum, setRowSum] = useState(data.length);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(Math.ceil(rowSum / 10));
  const [totalPage, setTotalPage] = useState(Math.ceil(rowSum / 10));
  const [searchedData, setSearchedData] = useState([]);
  const [filterRoles, setFilterRoles] = useState("");

  function updateRole(email, role) {
    fetch(`${process.env.NEXT_PUBLIC_HOST}/api/pengguna/roles`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        role,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          // change row data
          const newData = rowData.map((item) => {
            if (item.email === email) {
              return {
                ...item,
                role,
              };
            }
            return item;
          });
          setRowData(newData);
          toast.success("Berhasil mengubah role pengguna");
        } else {
          toast.error("Gagal mengubah role pengguna");
        }
      })
      .catch((err) => {
        toast.error("Gagal mengubah role pengguna");
      });
  }

  useEffect(() => {
    //     filter data with search, filterKemiskinan, filterKedisabilitasan
    const filteredData = data.filter((item) => {
      return (
        (item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.email.toLowerCase().includes(search.toLowerCase())) &&
        item.role.toLowerCase().includes(filterRoles.toLowerCase())
      );
    });
    setRowSum(filteredData.length);
    setTotalPage(Math.ceil(filteredData.length / 10));
    setTempData(filteredData);
    setRowData(filteredData.slice(0, 10));
    setPage(1);
  }, [search, filterRoles, data]);

  const renderPageNumbers = () => {
    let pages = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push(
        <Button
          onClick={() => setPage(i)}
          sx={{
            borderRadius: "50%",
          }}
          key={i}
          size="sm"
          variant={i === page ? "solid" : "plain"}
          color="neutral"
        >
          {i}
        </Button>
      );
    }
    return pages;
  };

  const previousButton = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  const nextButton = () => {
    if (page < rowSum / 10) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    //   pagination
    const start = (page - 1) * 10;
    const end = page * 10;
    setRowData(tempData.slice(start, end));
  }, [page]);
  return (
    <>
      <Box
        className="SearchAndFilters-tabletUp"
        sx={{
          borderRadius: "sm",
          py: 2,
          display: {
            xs: "none",
            sm: "flex",
          },
          flexWrap: "wrap",
          gap: 1.5,
          "& > *": {
            minWidth: {
              xs: "120px",
              md: "160px",
            },
          },
        }}
      >
        <FormControl sx={{ flex: 1 }} size="sm">
          <FormLabel>Cari Pengguna</FormLabel>
          <Input
            size="sm"
            placeholder="Search"
            startDecorator={<SearchIcon />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </FormControl>
        <FormControl size="sm">
          <FormLabel>Role</FormLabel>
          <Select
            size="sm"
            defaultValue="Semua"
            slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
          >
            <Option default value={"Semua"} onClick={() => setFilterRoles("")}>
              Semua
            </Option>
            {listRoles?.map((item) => (
              <Option
                key={item.role}
                onClick={() => setFilterRoles(item.role)}
                value={item.role}
              >
                {item.role}
              </Option>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Sheet
        className="OrderTableContainer"
        variant="outlined"
        sx={{
          display: { xs: "none", sm: "initial" },
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
            "--TableCell-headBackground":
              "var(--joy-palette-background-level1)",
            "--Table-headerUnderlineThickness": "1px",
            "--TableRow-hoverBackground":
              "var(--joy-palette-background-level1)",
            "--TableCell-paddingY": "4px",
            "--TableCell-paddingX": "8px",
          }}
        >
          <thead>
            <tr>
              <th
                style={{
                  width: 60,
                  padding: "12px 18px",
                  fontWeight: "500",
                  fontSize: "1.1em",
                }}
              >
                No
              </th>
              <th
                style={{
                  width: 140,
                  padding: "12px 6px",
                  fontWeight: "500",
                  fontSize: "1.1em",
                }}
              >
                Nama
              </th>

              <th
                style={{
                  width: 140,
                  padding: "12px 6px",
                  fontWeight: "500",
                  fontSize: "1.1em",
                }}
              >
                Email
              </th>
              <th
                style={{
                  width: 100,
                  padding: "12px 6px",
                  fontWeight: "500",
                  fontSize: "1.1em",
                }}
              >
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            {rowData.length === 0 && (
              <tr>
                <td colSpan={4} style={{ textAlign: "center" }}>
                  Data tidak ditemukan
                </td>
              </tr>
            )}
            {rowData.map((row, index) => (
              <tr key={index + 1}>
                <td>
                  <Typography sx={{ pl: "16px", fontWeight: "md" }}>
                    {page * 10 - 10 + index + 1}
                  </Typography>
                </td>
                <td>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Avatar
                      size="sm"
                      variant="outlined"
                      alt={row.name + "Profile Picture"}
                      src={row.image}
                    />
                    <div>
                      <Typography>{row.name}</Typography>
                    </div>
                  </Box>
                </td>
                <td>
                  <Typography>{row.email}</Typography>
                </td>
                <td>
                  <Select
                    disabled={row.role === "Admin"}
                    defaultValue={row.role || "Guest"}
                    indicator={<KeyboardArrowDown />}
                    sx={{
                      width: 120,
                      [`& .${selectClasses.indicator}`]: {
                        transition: "0.2s",
                        [`&.${selectClasses.expanded}`]: {
                          transform: "rotate(-180deg)",
                        },
                      },
                    }}
                  >
                    {listRoles?.map((item) => (
                      <Option
                        onClick={() => updateRole(row.email, item.role)}
                        value={item.role || "Guest"}
                        key={item.role}
                      >
                        {item.role}
                      </Option>
                    ))}
                  </Select>
                  {/*<Typography sx={{ textTransform: "capitalize" }}>*/}
                  {/*  {row.role || "Guest"}*/}
                  {/*</Typography>*/}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
      <Box
        className="Pagination-laptopUp"
        sx={{
          pt: 2,
          gap: 1,
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <Button
          size="sm"
          variant="outlined"
          color="neutral"
          startDecorator={<KeyboardArrowLeftIcon />}
          onClick={previousButton}
          disabled={page === 1 || page === 0}
        >
          Previous
        </Button>
        <Box sx={{ flex: 1 }} />
        {renderPageNumbers()}
        <Box sx={{ flex: 1 }} />
        <Button
          size="sm"
          variant="outlined"
          color="neutral"
          endDecorator={<KeyboardArrowRightIcon />}
          onClick={nextButton}
          disabled={page === Math.ceil(rowSum / 10)}
        >
          Next
        </Button>
      </Box>
      <Toaster position="top-center" richColors closeButton />
    </>
  );
}
