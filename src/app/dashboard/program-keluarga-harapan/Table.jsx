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
import { Transition } from "react-transition-group";
import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import { toast, Toaster } from "sonner";
import { useSession } from "next-auth/react";
import Tooltip from "@mui/joy/Tooltip";
import IconButton from "@mui/joy/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

// const data = [
//   {
//     NIK: "246.10.249.100/12",
//     KepalaKeluarga: "Nyssa Hillitt",
//     Alamat: "61 Vidon Street",
//   },
// ];

export default function TablePKH({ dataPKH, mutateData }) {
  const { data, status } = useSession();

  const [rowData, setRowData] = useState([]);
  const [search, setSearch] = useState("");
  const [rowSum, setRowSum] = useState(dataPKH.length);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(Math.ceil(rowSum / 10));
  const [totalPage, setTotalPage] = useState(Math.ceil(rowSum / 10));
  const [searchedData, setSearchedData] = useState([]);
  const [open, setOpen] = useState(false);
  const [hapus, setHapus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleHapusButton = (e) => {
    setHapus(e);
    setOpen(true);
  };

  const handleHapus = async (e) => {
    setLoading(true);
    toast.loading("Menghapus Data...");
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/bantuan/data`,
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
      const newData = dataPKH.filter((item) => item.indexRow !== hapus);
      //   reset indexRow object of newData
      const newDataWithIndex = newData.map((item, index) => {
        return { ...item, indexRow: index + 1 };
      });
      mutateData(newDataWithIndex, false);
      setSearch("");
    } else {
      toast.error("Data Gagal Dihapus");
    }
    setOpen(false);
    setLoading(false);
  };

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
      const filteredData = dataPKH.filter((item) => {
        return (
          item.NIK?.toLowerCase().includes(search.toLowerCase()) ||
          item.KepalaKeluarga?.toLowerCase().includes(search.toLowerCase()) ||
          item.Alamat?.toLowerCase().includes(search.toLowerCase())
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
      setRowData(dataPKH);
      setRowSum(dataPKH.length);
      setTotalPage(Math.ceil(dataPKH.length / 10));
      setPage(1);
      const start = (page - 1) * 10;
      const end = page * 10;
      setRowData(dataPKH.slice(start, end));
      setMaxPage(Math.ceil(dataPKH.length / 10));
    }
  }, [search]);

  useEffect(() => {
    setRowData(dataPKH);
    setRowSum(dataPKH.length);
    setTotalPage(Math.ceil(dataPKH.length / 10));
    setPage(page);
    const start = (page - 1) * 10;
    const end = page * 10;
    setRowData(dataPKH.slice(start, end));
  }, [dataPKH]);

  useEffect(() => {
    //   pagination
    const start = (page - 1) * 10;
    const end = page * 10;
    setRowData(dataPKH.slice(start, end));
    setMaxPage(Math.ceil(rowSum / 10));
  }, [page]);
  return (
    <>
      <Box
        className="SearchAndFonilters-tabletUp"
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
                  width: 150,
                  padding: "12px 6px",
                  fontWeight: "500",
                  fontSize: "1.1em",
                }}
              >
                NIK
              </th>

              <th
                style={{
                  width: 300,
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
                      {row.KepalaKeluarga?.split(" ").map((item) => item[0])}
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
                  {data.user?.role === "Viewer" ? null : (
                    <Tooltip
                      title={"Hapus"}
                      arrow
                      color="danger"
                      placement="right"
                      size="sm"
                      variant="solid"
                    >
                      <IconButton
                        onClick={() => handleHapusButton(row.indexRow)}
                        size="sm"
                        variant="soft"
                        color="danger"
                      >
                        <DeleteOutlineIcon />
                      </IconButton>
                    </Tooltip>
                  )}
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
          display: "flex",
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
                  loading={loading}
                  onClick={() => handleHapus()}
                >
                  Hapus
                </Button>
                <Button
                  variant="plain"
                  color="neutral"
                  disabled={loading}
                  onClick={() => setOpen(false)}
                >
                  Kembali
                </Button>
              </DialogActions>
            </ModalDialog>
          </Modal>
        )}
      </Transition>
      <Toaster position="top-center" richColors closeButton />
    </>
  );
}
