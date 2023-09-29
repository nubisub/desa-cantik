"use client";
import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import Stack from "@mui/joy/Stack";
import AddIcon from "@mui/icons-material/Add";
import { Transition } from "react-transition-group";
import { ModalClose } from "@mui/joy";
import { toast, Toaster } from "sonner";
import { useSession } from "next-auth/react";

export default function Add() {
  const { data, status } = useSession();

  const [open, setOpen] = React.useState(false);
  const [NIK, setNIK] = React.useState("");
  const [KepalaKeluarga, setKepalaKeluarga] = React.useState("");
  const [Alamat, setAlamat] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (open) {
      setNIK("");
      setKepalaKeluarga("");
      setAlamat("");
    }
  }, [open]);

  const handleSubmit = async (e) => {
    //   if nik is not 16 digit number
    e.preventDefault();
    if (!/^\d{16}$/.test(NIK)) {
      toast.error("NIK harus 16 digit angka");
      return;
    }
    toast.loading("Menambah Data...");
    setLoading(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_HOST}/api/bantuan/data`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          NIK,
          KepalaKeluarga,
          Alamat,
        }),
      }
    );
    if (res.ok) {
      toast.success("Data Berhasil Ditambahkan");

      setOpen(false);
      setNIK("");
      setKepalaKeluarga("");
      setAlamat("");
      // refresh page window
      window.location.reload();
    }
    setOpen(false);
    setLoading(false);
  };

  if (status === "loading") {
    return null;
  }

  if (data.user.role === "Viewer") {
    return null;
  }

  return (
    <>
      <Toaster position="top-center" richColors closeButton />

      <Button
        onClick={() => setOpen(true)}
        color="primary"
        startDecorator={<AddIcon />}
        size="sm"
      >
        Tambah
      </Button>
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
                minWidth: {
                  xs: "100%",
                  sm: "50%",
                  md: "40%",
                  lg: "30%",
                  xl: "25%",
                },
                p: 4,
                opacity: 0,
                transition: `opacity 300ms`,
                ...{
                  entering: { opacity: 1 },
                  entered: { opacity: 1 },
                }[state],
              }}
            >
              <ModalClose />
              <DialogTitle
                sx={{
                  fontSize: "1.25em",
                }}
              >
                Tambah Daftar Penerima BLT
              </DialogTitle>
              <form onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <FormControl>
                    <FormLabel>Nomor Induk Kependudukan</FormLabel>
                    <Input
                      value={NIK}
                      onChange={(e) => setNIK(e.target.value)}
                      autoFocus
                      required
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Nama Kepala Keluarga</FormLabel>
                    <Input
                      onChange={(e) => setKepalaKeluarga(e.target.value)}
                      value={KepalaKeluarga}
                      required
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Alamat</FormLabel>
                    <Input
                      onChange={(e) => setAlamat(e.target.value)}
                      value={Alamat}
                      required
                    />
                  </FormControl>
                  <Button loading={loading} type="submit">
                    Submit
                  </Button>
                </Stack>
              </form>
            </ModalDialog>
          </Modal>
        )}
      </Transition>
    </>
  );
}
