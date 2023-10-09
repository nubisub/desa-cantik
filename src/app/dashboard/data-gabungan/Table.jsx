"use client";
import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/joy/Box";
import { FormControl, FormLabel, Input } from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/joy/Button";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

export default function TablePKH({
  data: dataDisabilitas,
  listKemiskinan,
  listDisabilitas,
  mutateData,
}) {
  const { data, status } = useSession();
  const [loading, setLoading] = useState(false);

  const [rowData, setRowData] = useState(dataDisabilitas);
  const [tempData, setTempData] = useState(dataDisabilitas);
  const [search, setSearch] = useState("");
  const [rowSum, setRowSum] = useState(dataDisabilitas.length);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(Math.ceil(rowSum / 10));
  const [totalPage, setTotalPage] = useState(Math.ceil(rowSum / 10));
  const [searchedData, setSearchedData] = useState([]);
  const [filterKemiskinan, setFilterKemiskinan] = useState("");
  const [filterKedisabilitasan, setFilterKedisabilitasan] = useState("");
  const [open, setOpen] = useState(false);
  const [hapus, setHapus] = useState("");
  const [valueFilterKedisabilitasan, setValueFilterKedisabilitasan] =
    useState("Semua");
  const [valueFilterKemiskinan, setValueFilterKemiskinan] = useState("Semua");
  const handleHapusButton = (e) => {
    setHapus(e);
    setOpen(true);
  };

  const handleHapus = async (e) => {
    setLoading(true);
    toast.loading("Menghapus Data...");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/disabilitas/data`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          index: hapus,
        }),
      }
    );
    if (res.ok) {
      toast.success("Data Berhasil Dihapus");
      const newData = dataDisabilitas.filter((item) => item.indexRow !== hapus);
      //   reset indexRow object of newData
      const newDataWithIndex = newData.map((item, index) => {
        return { ...item, indexRow: index + 1 };
      });
      mutateData(newDataWithIndex, false);
      setPage(1);
      setSearch("");
      setFilterKemiskinan("");
      setValueFilterKedisabilitasan("Semua");
      setValueFilterKemiskinan("Semua");
      setFilterKedisabilitasan("");
    } else {
      toast.error("Data Gagal Dihapus");
    }
    setOpen(false);
    setLoading(false);
  };

  useEffect(() => {
    //     filter data with search, filterKemiskinan, filterKedisabilitasan
    const filteredData = dataDisabilitas.filter((item) => {
      if (filterKemiskinan === "") {
        return (
          (item.Nama.toLowerCase().includes(search.toLowerCase()) ||
            item.NIK.toLowerCase().includes(search.toLowerCase()) ||
            item.NOKK.toLowerCase().includes(search.toLowerCase()) ||
            item.Alamat.toLowerCase().includes(search.toLowerCase())) &&
          item.Kedisabilitasan?.includes(filterKedisabilitasan)
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
  }, [search, filterKemiskinan, filterKedisabilitasan]);

  const renderPageNumbers = () => {
    let pages = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push(
        <Button
          onClick={() => setPage(i)}
          sx={{
            display: {
              xs: "none",
              md: "block",
            },
            borderRadius: "50%",
          }}
          key={i}
          size="sm"
          variant={i === page ? "solid" : "plain"}
          color="neutral"
        >
          100
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
    setRowData(dataDisabilitas);
    setTempData(dataDisabilitas);
    setRowSum(dataDisabilitas.length);
    setTotalPage(Math.ceil(dataDisabilitas.length / 10));
    setPage(page);
    const start = (page - 1) * 10;
    const end = page * 10;
    setRowData(dataDisabilitas.slice(start, end));
  }, [dataDisabilitas]);

  useEffect(() => {
    //   pagination
    const start = (page - 1) * 10;
    const end = page * 10;
    setRowData(tempData.slice(start, end));
  }, [page]);
  function handleSearchButton(e) {
    e.preventDefault();
    console.log("NIK");
    console.log(search);
  }
  function handleSearch(e) {
    setSearch(e.target.value);
    // if e 16 digit number
    if (e.target.value.length === 16 && !isNaN(e.target.value)) {
      console.log("NIK");
      console.log(e.target.value);
    }
  }
  return (
    <>
      <Box
        className="SearchAndFilters-tabletUp"
        sx={{
          borderRadius: "sm",
          py: 2,
          display: "flex",
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
        <form
          onSubmit={handleSearchButton}
          style={{
            display: "flex",
            width: "100%",
          }}
          id="demo"
        >
          <FormControl
            sx={{
              flex: {
                xs: "1 1 100%",
                md: "1",
              },
            }}
            size="sm"
          >
            <FormLabel>Cari Berdasarkan NIK</FormLabel>
            <Input
              sx={{ "--Input-decoratorChildHeight": "45px" }}
              size="lg"
              placeholder="Search"
              startDecorator={<SearchIcon />}
              value={search}
              onChange={handleSearch}
              endDecorator={
                <Button
                  variant="solid"
                  color="primary"
                  loading={data.status === "loading"}
                  type="submit"
                  sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
                >
                  Cari
                </Button>
              }
            />
          </FormControl>
        </form>
      </Box>
      {/*<Sheet*/}
      {/*  className="OrderTableContainer"*/}
      {/*  variant="outlined"*/}
      {/*  sx={{*/}
      {/*    display: "initial",*/}
      {/*    width: "100%",*/}
      {/*    borderRadius: "sm",*/}
      {/*    flexShrink: 1,*/}
      {/*    overflow: "auto",*/}
      {/*    minHeight: 0,*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Table*/}
      {/*    aria-labelledby="tableTitle"*/}
      {/*    stickyHeader*/}
      {/*    hoverRow*/}
      {/*    sx={{*/}
      {/*      "--TableCell-headBackground":*/}
      {/*        "var(--joy-palette-background-level1)",*/}
      {/*      "--Table-headerUnderlineThickness": "1px",*/}
      {/*      "--TableRow-hoverBackground":*/}
      {/*        "var(--joy-palette-background-level1)",*/}
      {/*      "--TableCell-paddingY": "4px",*/}
      {/*      "--TableCell-paddingX": "8px",*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <thead*/}
      {/*      style={{*/}
      {/*        fontSize: ".9em",*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      <tr>*/}
      {/*        <th*/}
      {/*          style={{*/}
      {/*            width: 60,*/}
      {/*            padding: "12px 18px",*/}
      {/*            fontWeight: "600",*/}
      {/*            fontSize: "1.1em",*/}
      {/*          }}*/}
      {/*        >*/}
      {/*          No*/}
      {/*        </th>*/}
      {/*        <th*/}
      {/*          style={{*/}
      {/*            width: 140,*/}
      {/*            padding: "12px 6px",*/}
      {/*            fontWeight: "600",*/}
      {/*            fontSize: "1.1em",*/}
      {/*          }}*/}
      {/*        >*/}
      {/*          Nama*/}
      {/*        </th>*/}
      {/*        <th*/}
      {/*          style={{*/}
      {/*            width: 140,*/}
      {/*            padding: "12px 6px",*/}
      {/*            fontWeight: "600",*/}
      {/*            fontSize: "1.1em",*/}
      {/*          }}*/}
      {/*        >*/}
      {/*          NIK*/}
      {/*        </th>*/}
      {/*        <th*/}
      {/*          style={{*/}
      {/*            width: 140,*/}
      {/*            padding: "12px 6px",*/}
      {/*            fontWeight: "600",*/}
      {/*            fontSize: "1.1em",*/}
      {/*          }}*/}
      {/*        >*/}
      {/*          No KK*/}
      {/*        </th>*/}
      {/*        <th*/}
      {/*          style={{*/}
      {/*            width: 220,*/}
      {/*            padding: "12px 6px",*/}
      {/*            fontWeight: "600",*/}
      {/*            fontSize: "1.1em",*/}
      {/*          }}*/}
      {/*        >*/}
      {/*          Alamat*/}
      {/*        </th>*/}
      {/*        <th*/}
      {/*          style={{*/}
      {/*            width: 140,*/}
      {/*            padding: "12px 6px",*/}
      {/*            fontWeight: "600",*/}
      {/*            fontSize: "1.1em",*/}
      {/*          }}*/}
      {/*        >*/}
      {/*          Kedisabilitasan*/}
      {/*        </th>*/}
      {/*        <th*/}
      {/*          style={{*/}
      {/*            width: 140,*/}
      {/*            padding: "12px 6px",*/}
      {/*            fontWeight: "600",*/}
      {/*            fontSize: "1.1em",*/}
      {/*          }}*/}
      {/*        >*/}
      {/*          Kemiskinan*/}
      {/*        </th>*/}
      {/*        <th*/}
      {/*          style={{*/}
      {/*            width: 60,*/}
      {/*            padding: "12px 6px",*/}
      {/*            fontWeight: "600",*/}
      {/*            fontSize: "1.1em",*/}
      {/*          }}*/}
      {/*        ></th>*/}
      {/*      </tr>*/}
      {/*    </thead>*/}
      {/*    <tbody*/}
      {/*      style={{*/}
      {/*        fontSize: ".9em",*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      {rowData.length === 0 && (*/}
      {/*        <tr>*/}
      {/*          <td colSpan={7} style={{ textAlign: "center" }}>*/}
      {/*            Data tidak ditemukan*/}
      {/*          </td>*/}
      {/*        </tr>*/}
      {/*      )}*/}
      {/*      {rowData.map((row, index) => (*/}
      {/*        <tr key={index + 1}>*/}
      {/*          <td>*/}
      {/*            <Typography sx={{ pl: "16px", fontWeight: "md" }}>*/}
      {/*              {page * 10 - 10 + index + 1}*/}
      {/*            </Typography>*/}
      {/*          </td>*/}
      {/*          <td>*/}
      {/*            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>*/}
      {/*              /!*<Avatar size="sm">*!/*/}
      {/*              /!*  {row.Nama.split(" ").map((item) => item[0])}*!/*/}
      {/*              /!*</Avatar>*!/*/}
      {/*              <div>*/}
      {/*                <Typography>{row.Nama}</Typography>*/}
      {/*              </div>*/}
      {/*            </Box>*/}
      {/*          </td>*/}
      {/*          <td>*/}
      {/*            <Typography>{row.NIK}</Typography>*/}
      {/*          </td>*/}
      {/*          <td>*/}
      {/*            <Typography>{row.NOKK}</Typography>*/}
      {/*          </td>*/}
      {/*          <td>*/}
      {/*            <Typography sx={{ textTransform: "capitalize" }}>*/}
      {/*              {row.Alamat}*/}
      {/*            </Typography>*/}
      {/*          </td>*/}
      {/*          <td>*/}
      {/*            <Typography sx={{ textTransform: "capitalize" }}>*/}
      {/*              {row.Kedisabilitasan}*/}
      {/*            </Typography>*/}
      {/*          </td>*/}
      {/*          <td>*/}
      {/*            <Typography sx={{ textTransform: "capitalize" }}>*/}
      {/*              {row.Kemiskinan}*/}
      {/*            </Typography>*/}
      {/*          </td>*/}
      {/*          <td>*/}
      {/*            {data.user?.role === "Viewer" ? null : (*/}
      {/*              <Tooltip*/}
      {/*                title={"Hapus"}*/}
      {/*                arrow*/}
      {/*                color="danger"*/}
      {/*                placement="right"*/}
      {/*                size="sm"*/}
      {/*                variant="solid"*/}
      {/*              >*/}
      {/*                <IconButton*/}
      {/*                  onClick={() => handleHapusButton(row.indexRow)}*/}
      {/*                  size="sm"*/}
      {/*                  variant="soft"*/}
      {/*                  color="danger"*/}
      {/*                >*/}
      {/*                  <DeleteOutlineIcon />*/}
      {/*                </IconButton>*/}
      {/*              </Tooltip>*/}
      {/*            )}*/}
      {/*          </td>*/}
      {/*        </tr>*/}
      {/*      ))}*/}
      {/*    </tbody>*/}
      {/*  </Table>*/}
      {/*</Sheet>*/}
      {/*<Box*/}
      {/*  className="Pagination-laptopUp"*/}
      {/*  sx={{*/}
      {/*    pt: 2,*/}
      {/*    gap: 1,*/}
      {/*    display: "flex",*/}
      {/*    alignItems: "center",*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Button*/}
      {/*    size="sm"*/}
      {/*    variant="outlined"*/}
      {/*    color="neutral"*/}
      {/*    startDecorator={<KeyboardArrowLeftIcon />}*/}
      {/*    onClick={previousButton}*/}
      {/*    disabled={page === 1 || page === 0}*/}
      {/*  >*/}
      {/*    Previous*/}
      {/*  </Button>*/}
      {/*  <Box sx={{ flex: 1 }} />*/}
      {/*  <Typography*/}
      {/*    sx={{*/}
      {/*      display: {*/}
      {/*        xs: "block",*/}
      {/*        md: "none",*/}
      {/*      },*/}
      {/*      fontSize: "0.8em",*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    {page * 10 - 9} -{" "}*/}
      {/*    {page === Math.ceil(rowSum / 10) ? rowSum : page * 10} dari {rowSum}*/}
      {/*  </Typography>*/}
      {/*  {renderPageNumbers()}*/}
      {/*  /!*iterate *!/*/}

      {/*  /!*  iterate over 10 times*!/*/}

      {/*  /!*{["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"].map((page) => (*!/*/}
      {/*  /!*  <IconButton*!/*/}
      {/*  /!*    onClick={() => setPage(Number(page))}*!/*/}
      {/*  /!*    sx={{*!/*/}
      {/*  /!*      borderRadius: "50%",*!/*/}
      {/*  /!*    }}*!/*/}
      {/*  /!*    key={page}*!/*/}
      {/*  /!*    size="sm"*!/*/}
      {/*  /!*    variant={Number(page) ? "outlined" : "plain"}*!/*/}
      {/*  /!*    color="neutral"*!/*/}
      {/*  /!*  >*!/*/}
      {/*  /!*    {page}*!/*/}
      {/*  /!*  </IconButton>*!/*/}
      {/*  /!*))}*!/*/}
      {/*  <Box sx={{ flex: 1 }} />*/}
      {/*  <Button*/}
      {/*    size="sm"*/}
      {/*    variant="outlined"*/}
      {/*    color="neutral"*/}
      {/*    endDecorator={<KeyboardArrowRightIcon />}*/}
      {/*    onClick={nextButton}*/}
      {/*    disabled={page === Math.ceil(rowSum / 10)}*/}
      {/*  >*/}
      {/*    Next*/}
      {/*  </Button>*/}
      {/*</Box>*/}
      {/*<Transition in={open} timeout={400}>*/}
      {/*  {(state) => (*/}
      {/*    <Modal*/}
      {/*      keepMounted*/}
      {/*      open={!["exited", "exiting"].includes(state)}*/}
      {/*      onClose={() => setOpen(false)}*/}
      {/*      slotProps={{*/}
      {/*        backdrop: {*/}
      {/*          sx: {*/}
      {/*            opacity: 0,*/}
      {/*            backdropFilter: "none",*/}
      {/*            transition: `opacity 400ms, backdrop-filter 400ms`,*/}
      {/*            ...{*/}
      {/*              entering: { opacity: 1, backdropFilter: "blur(8px)" },*/}
      {/*              entered: { opacity: 1, backdropFilter: "blur(8px)" },*/}
      {/*            }[state],*/}
      {/*          },*/}
      {/*        },*/}
      {/*      }}*/}
      {/*      sx={{*/}
      {/*        visibility: state === "exited" ? "hidden" : "visible",*/}
      {/*      }}*/}
      {/*    >*/}
      {/*      <ModalDialog*/}
      {/*        sx={{*/}
      {/*          opacity: 0,*/}
      {/*          transition: `opacity 300ms`,*/}
      {/*          ...{*/}
      {/*            entering: { opacity: 1 },*/}
      {/*            entered: { opacity: 1 },*/}
      {/*          }[state],*/}
      {/*        }}*/}
      {/*        variant="outlined"*/}
      {/*        role="alertdialog"*/}
      {/*      >*/}
      {/*        <DialogTitle>*/}
      {/*          <WarningRoundedIcon />*/}
      {/*          Konfirmasi*/}
      {/*        </DialogTitle>*/}
      {/*        <Divider />*/}
      {/*        <DialogContent>*/}
      {/*          Apakah anda yakin ingin menghapus data ini?*/}
      {/*        </DialogContent>*/}
      {/*        <DialogActions>*/}
      {/*          <Button*/}
      {/*            variant="solid"*/}
      {/*            color="danger"*/}
      {/*            loading={loading}*/}
      {/*            onClick={() => handleHapus()}*/}
      {/*          >*/}
      {/*            Hapus*/}
      {/*          </Button>*/}
      {/*          <Button*/}
      {/*            variant="plain"*/}
      {/*            color="neutral"*/}
      {/*            disabled={loading}*/}
      {/*            onClick={() => setOpen(false)}*/}
      {/*          >*/}
      {/*            Kembali*/}
      {/*          </Button>*/}
      {/*        </DialogActions>*/}
      {/*      </ModalDialog>*/}
      {/*    </Modal>*/}
      {/*  )}*/}
      {/*</Transition>*/}
    </>
  );
}
