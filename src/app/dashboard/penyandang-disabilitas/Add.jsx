"use client";
import * as React from "react";
import Button from "@mui/joy/Button";
import AddIcon from "@mui/icons-material/Add";
import { toast, Toaster } from "sonner";
import Link from "next/link";

export default function Add() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
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
    toast.loading("Loading...");
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
      setDrawerOpen(false);
      setNIK("");
      setKepalaKeluarga("");
      setAlamat("");
      toast.success("Data Berhasil Ditambahkan");
    }
    setDrawerOpen(false);
    setLoading(false);
  };
  const SPID = process.env.GOOGLE_SPREADSHEET_SHEET2;

  return (
    <>
      <Toaster position="top-center" richColors closeButton />

      <Link
        href={`${process.env.NEXT_PUBLIC_GOOGLE_SPREADSHEET_SHEET2}`}
        target={"_blank"}
      >
        <Button color="primary" startDecorator={<AddIcon />} size="sm">
          Tambah
        </Button>
      </Link>

      {/*<Drawer*/}
      {/*  anchor="right"*/}
      {/*  open={drawerOpen}*/}
      {/*  size="lg"*/}
      {/*  variant="plain"*/}
      {/*  onClose={() => setDrawerOpen(false)}*/}
      {/*  slotProps={{*/}
      {/*    content: {*/}
      {/*      sx: {*/}
      {/*        bgcolor: "transparent",*/}
      {/*        p: { md: 3, sm: 0 },*/}
      {/*        boxShadow: "none",*/}
      {/*      },*/}
      {/*    },*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <Sheet*/}
      {/*    sx={{*/}
      {/*      borderRadius: "md",*/}
      {/*      p: 2,*/}
      {/*      display: "flex",*/}
      {/*      flexDirection: "column",*/}
      {/*      gap: 2,*/}
      {/*      height: "100%",*/}
      {/*      overflow: "auto",*/}
      {/*    }}*/}
      {/*  >*/}
      {/*    <DialogTitle>Tambah Data</DialogTitle>*/}
      {/*    <ModalClose />*/}
      {/*    <Divider sx={{ mt: "auto" }} />*/}
      {/*    <DialogContent sx={{ gap: 2 }}>*/}
      {/*      <FormControl orientation="horizontal">*/}
      {/*        <Box sx={{ flex: 1, pr: 1 }}>*/}
      {/*          <FormLabel sx={{ typography: "title-sm" }}>Nama</FormLabel>*/}
      {/*          <Input color="neutral" size="sm" variant="outlined" />*/}
      {/*        </Box>*/}
      {/*      </FormControl>*/}

      {/*      <FormControl orientation="horizontal">*/}
      {/*        <Box sx={{ flex: 1, mr: 1 }}>*/}
      {/*          <FormLabel sx={{ typography: "title-sm" }}>*/}
      {/*            Nomor Induk Kependudukan*/}
      {/*          </FormLabel>*/}
      {/*          <Input color="neutral" size="sm" variant="outlined" />*/}
      {/*        </Box>*/}
      {/*      </FormControl>*/}

      {/*      <FormControl orientation="horizontal">*/}
      {/*        <Box sx={{ flex: 1, mr: 1 }}>*/}
      {/*          <FormLabel sx={{ typography: "title-sm" }}>*/}
      {/*            Nomor Kartu Keluarga*/}
      {/*          </FormLabel>*/}
      {/*          <Input color="neutral" size="sm" variant="outlined" />*/}
      {/*        </Box>*/}
      {/*      </FormControl>*/}

      {/*      <FormControl orientation="horizontal">*/}
      {/*        <Box sx={{ flex: 1, mr: 1 }}>*/}
      {/*          <FormLabel sx={{ typography: "title-sm" }}>*/}
      {/*            Jenis Kelamin*/}
      {/*          </FormLabel>*/}
      {/*          <Select placeholder="Pilih Jenis Kelamin">*/}
      {/*            <Option>Laki-Laki</Option>*/}
      {/*            <Option>Perempuan</Option>*/}
      {/*          </Select>*/}
      {/*        </Box>*/}
      {/*      </FormControl>*/}

      {/*      <FormControl orientation="horizontal">*/}
      {/*        <Box sx={{ flex: 1, mr: 1 }}>*/}
      {/*          <FormLabel sx={{ typography: "title-sm" }}>*/}
      {/*            Tempat Lahir (Kab/Kota)*/}
      {/*          </FormLabel>*/}
      {/*          <Input color="neutral" size="sm" variant="outlined" />*/}
      {/*        </Box>*/}
      {/*      </FormControl>*/}

      {/*      <FormControl orientation="horizontal">*/}
      {/*        <Box sx={{ flex: 1, mr: 1 }}>*/}
      {/*          <FormLabel sx={{ typography: "title-sm" }}>*/}
      {/*            Tanggal Lahir*/}
      {/*          </FormLabel>*/}
      {/*          <Input*/}
      {/*            type={"date"}*/}
      {/*            color="neutral"*/}
      {/*            size="sm"*/}
      {/*            variant="outlined"*/}
      {/*          />*/}
      {/*        </Box>*/}
      {/*      </FormControl>*/}

      {/*      <FormControl orientation="horizontal">*/}
      {/*        <Box sx={{ flex: 1, mr: 1 }}>*/}
      {/*          <FormLabel sx={{ typography: "title-sm" }}>*/}
      {/*            Pendidikan Terakhir*/}
      {/*          </FormLabel>*/}
      {/*          <Select placeholder="Pilih Pendidikan">*/}
      {/*            <Option>Sd/Mi/Sederajat</Option>*/}
      {/*            <Option>Sltp/Mts/Sederajat</Option>{" "}*/}
      {/*            <Option>Slta/Smk/Ma/Sederajat</Option>{" "}*/}
      {/*            <Option>Belum/Tidak Tamat Sd/Sederajat</Option>*/}
      {/*          </Select>*/}
      {/*        </Box>*/}
      {/*      </FormControl>*/}

      {/*      <FormControl orientation="horizontal">*/}
      {/*        <Box sx={{ flex: 1, mr: 1 }}>*/}
      {/*          <FormLabel sx={{ typography: "title-sm" }}>Kabupaten</FormLabel>*/}
      {/*          <Input color="neutral" size="sm" variant="outlined" />*/}
      {/*        </Box>*/}
      {/*      </FormControl>*/}

      {/*      <FormControl orientation="horizontal">*/}
      {/*        <Box sx={{ flex: 1, mr: 1 }}>*/}
      {/*          <FormLabel sx={{ typography: "title-sm" }}>Kapanewon</FormLabel>*/}
      {/*          <Input color="neutral" size="sm" variant="outlined" />*/}
      {/*        </Box>*/}
      {/*      </FormControl>*/}

      {/*      <FormControl orientation="horizontal">*/}
      {/*        <Box sx={{ flex: 1, mr: 1 }}>*/}
      {/*          <FormLabel sx={{ typography: "title-sm" }}>Kalurahan</FormLabel>*/}
      {/*          <Input color="neutral" size="sm" variant="outlined" />*/}
      {/*        </Box>*/}
      {/*      </FormControl>*/}

      {/*      <FormControl orientation="horizontal">*/}
      {/*        <Box sx={{ flex: 1, mr: 1 }}>*/}
      {/*          <FormLabel sx={{ typography: "title-sm" }}>Alamat</FormLabel>*/}
      {/*          <Input color="neutral" size="sm" variant="outlined" />*/}
      {/*        </Box>*/}
      {/*      </FormControl>*/}

      {/*      <FormControl orientation="horizontal">*/}
      {/*        <Box sx={{ flex: 1, mr: 1 }}>*/}
      {/*          <FormLabel sx={{ typography: "title-sm" }}>*/}
      {/*            Jenis Disabilitas*/}
      {/*          </FormLabel>*/}
      {/*          <Input color="neutral" size="sm" variant="outlined" />*/}
      {/*        </Box>*/}
      {/*      </FormControl>*/}

      {/*      <FormControl orientation="horizontal">*/}
      {/*        <Box sx={{ flex: 1, mr: 1 }}>*/}
      {/*          <FormLabel sx={{ typography: "title-sm" }}>*/}
      {/*            Jenis PPKS*/}
      {/*          </FormLabel>*/}
      {/*          <Input color="neutral" size="sm" variant="outlined" />*/}
      {/*        </Box>*/}
      {/*      </FormControl>*/}
      {/*    </DialogContent>*/}

      {/*    <Divider sx={{ mt: "auto" }} />*/}
      {/*    <Stack*/}
      {/*      direction="row"*/}
      {/*      justifyContent="space-between"*/}
      {/*      useFlexGap*/}
      {/*      spacing={1}*/}
      {/*    >*/}
      {/*      <Button*/}
      {/*        disabled={loading}*/}
      {/*        onClick={() => {*/}
      {/*          setDrawerOpen(false);*/}
      {/*        }}*/}
      {/*        variant="outlined"*/}
      {/*        color="neutral"*/}
      {/*      >*/}
      {/*        Batalkan*/}
      {/*      </Button>*/}
      {/*      <Button*/}
      {/*        loading={loading}*/}
      {/*        onClick={() => {*/}
      {/*          // updateRole(selectedRow.email, change, selectedRole);*/}
      {/*        }}*/}
      {/*      >*/}
      {/*        Tambah Data*/}
      {/*      </Button>*/}
      {/*    </Stack>*/}
      {/*  </Sheet>*/}
      {/*</Drawer>*/}
    </>
  );
}
