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
import { Toaster } from "sonner";

export default function Add() {
  const [open, setOpen] = React.useState(false);
  const [NIK, setNIK] = React.useState("");
  const [nama, setNama] = React.useState("");
  const [alamat, setAlamat] = React.useState("");

  React.useEffect(() => {
    if (open) {
      setNIK("");
      setNama("");
      setAlamat("");
    }
  }, [open]);

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
              <form>
                <Stack spacing={2}>
                  <FormControl>
                    <FormLabel>Nomor Induk Kependudukan</FormLabel>
                    <Input value={NIK} autoFocus required />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Nama Kepala Keluarga</FormLabel>
                    <Input value={nama} required />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Alamat</FormLabel>
                    <Input value={alamat} required />
                  </FormControl>
                  <Button type="submit">Submit</Button>
                </Stack>
              </form>
            </ModalDialog>
          </Modal>
        )}
      </Transition>
    </>
  );
}
