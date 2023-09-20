"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import { FormControl, FormLabel, Input, Select } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/joy/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Option from "@mui/joy/Option";

export default function TablePKH({ data, listKemiskinan, listDisabilitas }) {
  console.log(listKemiskinan);
  const [rowData, setRowData] = useState(data.data);
  const [tempData, setTempData] = useState(data.data);
  const [search, setSearch] = useState("");
  const [rowSum, setRowSum] = useState(data.data.length);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(Math.ceil(rowSum / 10));
  const [totalPage, setTotalPage] = useState(Math.ceil(rowSum / 10));
  const [searchedData, setSearchedData] = useState([]);
  const [filterKemiskinan, setFilterKemiskinan] = useState("");
  const [filterKedisabilitasan, setFilterKedisabilitasan] = useState("");

  useEffect(() => {
    //     filter data with search, filterKemiskinan, filterKedisabilitasan
    const filteredData = data.data.filter((item) => {
      if (filterKemiskinan === "") {
        return (
          (item.Nama.toLowerCase().includes(search.toLowerCase()) ||
            item.NIK.toLowerCase().includes(search.toLowerCase()) ||
            item.NOKK.toLowerCase().includes(search.toLowerCase()) ||
            item.Alamat.toLowerCase().includes(search.toLowerCase())) &&
          item.Kedisabilitasan.includes(filterKedisabilitasan)
        );
      }
      return (
        item.Nama.toLowerCase().includes(search.toLowerCase()) &&
        item.Kemiskinan == filterKemiskinan &&
        item.Kedisabilitasan.includes(filterKedisabilitasan)
      );
    });
    setRowSum(filteredData.length);
    setTotalPage(Math.ceil(filteredData.length / 10));
    setTempData(filteredData);
    setRowData(filteredData.slice(0, 10));
    setPage(1);
  }, [search, filterKemiskinan, filterKedisabilitasan, data.data]);

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
          <FormLabel>Cari Penyandang Disabilitas</FormLabel>
          <Input
            size="sm"
            placeholder="Search"
            startDecorator={<SearchIcon />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </FormControl>
        <FormControl size="sm">
          <FormLabel>Kedisabilitasan</FormLabel>
          <Select
            size="sm"
            defaultValue="Semua"
            slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
          >
            <Option
              default
              value={"Semua"}
              onClick={() => setFilterKedisabilitasan("")}
            >
              Semua
            </Option>
            {listDisabilitas.map((item) => (
              <Option
                key={item.Kedisabilitasan}
                onClick={() => setFilterKedisabilitasan(item.Kedisabilitasan)}
                value={item.Kedisabilitasan}
              >
                {item.Kedisabilitasan}
              </Option>
            ))}
          </Select>
        </FormControl>
        <FormControl size="sm">
          <FormLabel>Kemiskinan</FormLabel>
          <Select
            defaultValue="Semua"
            size="sm"
            slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
          >
            <Option
              default
              value={"Semua"}
              onClick={() => setFilterKemiskinan("")}
            >
              Semua
            </Option>
            {listKemiskinan.map((item) => (
              <Option
                key={item.Kemiskinan}
                onClick={() => setFilterKemiskinan(item.Kemiskinan)}
                value={item.Kemiskinan}
              >
                {item.Kemiskinan}
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
                NIK
              </th>
              <th
                style={{
                  width: 140,
                  padding: "12px 6px",
                  fontWeight: "500",
                  fontSize: "1.1em",
                }}
              >
                No KK
              </th>
              <th
                style={{
                  width: 220,
                  padding: "12px 6px",
                  fontWeight: "500",
                  fontSize: "1.1em",
                }}
              >
                Alamat
              </th>
              <th
                style={{
                  width: 140,
                  padding: "12px 6px",
                  fontWeight: "500",
                  fontSize: "1.1em",
                }}
              >
                Kedisabilitasan
              </th>
              <th
                style={{
                  width: 140,
                  padding: "12px 6px",
                  fontWeight: "500",
                  fontSize: "1.1em",
                }}
              >
                Kemiskinan
              </th>
            </tr>
          </thead>
          <tbody>
            {rowData.length === 0 && (
              <tr>
                <td colSpan={7} style={{ textAlign: "center" }}>
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
                    {/*<Avatar size="sm">*/}
                    {/*  {row.Nama.split(" ").map((item) => item[0])}*/}
                    {/*</Avatar>*/}
                    <div>
                      <Typography>{row.Nama}</Typography>
                    </div>
                  </Box>
                </td>
                <td>
                  <Typography>{row.NIK}</Typography>
                </td>
                <td>
                  <Typography>{row.NOKK}</Typography>
                </td>
                <td>
                  <Typography sx={{ textTransform: "capitalize" }}>
                    {row.Alamat}
                  </Typography>
                </td>
                <td>
                  <Typography sx={{ textTransform: "capitalize" }}>
                    {row.Kedisabilitasan}
                  </Typography>
                </td>
                <td>
                  <Typography sx={{ textTransform: "capitalize" }}>
                    {row.Kemiskinan}
                  </Typography>
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
        {/*iterate */}

        {/*  iterate over 10 times*/}

        {/*{["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map((page) => (*/}
        {/*  <IconButton*/}
        {/*    onClick={() => setPage(Number(page))}*/}
        {/*    sx={{*/}
        {/*      borderRadius: "50%",*/}
        {/*    }}*/}
        {/*    key={page}*/}
        {/*    size="sm"*/}
        {/*    variant={Number(page) ? "outlined" : "plain"}*/}
        {/*    color="neutral"*/}
        {/*  >*/}
        {/*    {page}*/}
        {/*  </IconButton>*/}
        {/*))}*/}
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
    </>
  );
}
