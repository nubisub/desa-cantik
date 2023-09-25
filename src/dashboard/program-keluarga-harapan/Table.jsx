"use client";
import { useEffect, useState } from "react";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import Avatar from "@mui/joy/Avatar";
import Modal from "@mui/joy/Modal";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControl,
  FormLabel,
  Input,
  ModalDialog,
} from "@mui/joy";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/joy/Button";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import IconButton from "@mui/joy/IconButton";
import Tooltip from "@mui/joy/Tooltip";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Transition } from "react-transition-group";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import { toast, Toaster } from "sonner";
// const data = [
//   {
//     NIK: "246.10.249.100/12",
//     KepalaKeluarga: "Nyssa Hillitt",
//     Alamat: "61 Vidon Street",
//   },
// ];

export default function TablePKH({ data }) {
  const [rowData, setRowData] = useState([]);
  const [search, setSearch] = useState("");
  const [rowSum, setRowSum] = useState(data.length);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(Math.ceil(rowSum / 10));
  const [totalPage, setTotalPage] = useState(Math.ceil(rowSum / 10));
  const [searchedData, setSearchedData] = useState([]);
  const [open, setOpen] = useState(false);
  const [hapus, setHapus] = useState("");

  const handleHapusButton = (e) => {
    console.log(e);
    setHapus(e);
    setOpen(true);
  };

  const handleHapus = (e) => {
    console.log(e);
    setOpen(false);

    toast.success("Data Berhasil Dihapus");
  };

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
    if (search) {
      //   filter with NIK and NAMA keluarga and alamat
      const filteredData = data.filter((item) => {
        return (
          item.NIK.toLowerCase().includes(search.toLowerCase()) ||
          item.KepalaKeluarga.toLowerCase().includes(search.toLowerCase()) ||
          item.Alamat.toLowerCase().includes(search.toLowerCase())
        );
      });
      setRowData(filteredData);
      setRowSum(filteredData.length);
      setTotalPage(Math.ceil(filteredData.length / 10));
      setPage(1);
      const start = (page - 1) * 10;
      const end = page * 10;
      setRowData(filteredData.slice(start, end));
      setMaxPage(Math.ceil(filteredData.length / 10));
    } else {
      setRowData(data);
      setRowSum(data.length);
      setTotalPage(Math.ceil(data.length / 10));
      setPage(1);
      const start = (page - 1) * 10;
      const end = page * 10;
      setRowData(data.slice(start, end));
      setMaxPage(Math.ceil(data.length / 10));
    }
  }, [search]);

  useEffect(() => {
    //   pagination
    const start = (page - 1) * 10;
    const end = page * 10;
    setRowData(data.slice(start, end));
    setMaxPage(Math.ceil(rowSum / 10));
  }, [page]);
  return (
    <>
      <Toaster position="top-center" richColors closeButton />

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
          <FormLabel>Cari Keluarga Penerima PKH</FormLabel>
          <Input
            size="sm"
            placeholder="Search"
            startDecorator={<SearchIcon />}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
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
                  width: 170,
                  padding: "12px 6px",
                  fontWeight: "500",
                  fontSize: "1.1em",
                }}
              >
                Kepala Keluarga
              </th>
              <th
                style={{
                  width: 120,
                  padding: "12px 6px",
                  fontWeight: "500",
                  fontSize: "1.1em",
                }}
              >
                NIK
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
                  width: 50,
                  padding: "12px 6px",
                  fontWeight: "500",
                  fontSize: "1.1em",
                }}
              ></th>
            </tr>
          </thead>
          <tbody>
            {rowData.map((row, index) => (
              <tr key={index + 1}>
                <td>
                  <Typography sx={{ pl: "16px", fontWeight: "md" }}>
                    {page * 10 - 10 + index + 1}
                  </Typography>
                </td>
                <td>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Avatar size="sm">
                      {row.KepalaKeluarga.split(" ").map((item) => item[0])}
                    </Avatar>
                    <div>
                      <Typography sx={{ textTransform: "capitalize" }}>
                        {row.KepalaKeluarga}
                      </Typography>
                    </div>
                  </Box>
                </td>
                <td>
                  <Typography>{row.NIK}</Typography>
                </td>

                <td>
                  <Typography sx={{ textTransform: "capitalize" }}>
                    {row.Alamat}
                  </Typography>
                </td>
                <td>
                  <Tooltip
                    title={"Hapus"}
                    arrow
                    color="danger"
                    placement="right"
                    size="sm"
                    variant="solid"
                  >
                    <IconButton
                      onClick={() => handleHapusButton(row.NIK)}
                      size="sm"
                      variant="soft"
                      color="danger"
                    >
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Tooltip>
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
      <Transition in={open} timeout={400}>
        {(state) => (
          <Modal
            keepMounted
            open={!["exited", "exiting"].includes(state)}
            onClose={() => setOpen(false)}
            slotProps={{
              backdrop: {
                sx: {
                  opacity: 0,
                  backdropFilter: "none",
                  transition: `opacity 400ms, backdrop-filter 400ms`,
                  ...{
                    entering: { opacity: 1, backdropFilter: "blur(8px)" },
                    entered: { opacity: 1, backdropFilter: "blur(8px)" },
                  }[state],
                },
              },
            }}
            sx={{
              visibility: state === "exited" ? "hidden" : "visible",
            }}
          >
            <ModalDialog
              sx={{
                opacity: 0,
                transition: `opacity 300ms`,
                ...{
                  entering: { opacity: 1 },
                  entered: { opacity: 1 },
                }[state],
              }}
              variant="outlined"
              role="alertdialog"
            >
              <DialogTitle>
                <WarningRoundedIcon />
                Konfirmasi
              </DialogTitle>
              <Divider />
              <DialogContent>
                Apakah anda yakin ingin menghapus data ini?
              </DialogContent>
              <DialogActions>
                <Button
                  variant="solid"
                  color="danger"
                  onClick={() => handleHapus()}
                >
                  Hapus
                </Button>
                <Button
                  variant="plain"
                  color="neutral"
                  onClick={() => setOpen(false)}
                >
                  Kembali
                </Button>
              </DialogActions>
            </ModalDialog>
          </Modal>
        )}
      </Transition>
    </>
  );
}
