"use client";
import Table from "./Table";
import useSWR from "swr";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Add from "@/app/dashboard/bantuan-langsung-tunai/Add";
import * as React from "react";
import { useCallback } from "react";
import Button from "@mui/joy/Button";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import { utils, writeFileXLSX } from "xlsx";

const data = [
  {
    NIK: "246.10.249.100/12",
    KepalaKeluarga: "Nyssa Hillitt",
    Alamat: "61 Vidon Street",
  },
];

const getFileName = () => {
  const fileName =
    "Penerima BLTDD Margoagung " +
    new Date()
      .toLocaleString()
      .replace(/\//g, "")
      .replace(/,/g, "")
      .replace(/:/g, "")
      .replace(/ /g, "");
  return fileName;
};

const fetcher = (url) => fetch(url).then((r) => r.json());

export const GetData = () => {
  const { data, error, isLoading, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_HOST}/api/bantuan/data`,
    fetcher,
    { refreshInterval: 15000, revalidateOnFocus: true }
  );
  return {
    mutateData: mutate,
    dataBantuan: data,
    error: error,
    isLoadingPKH: isLoading,
  };
};

export default function WrapperData() {
  const { dataBantuan, isLoadingPKH, mutateData } = GetData();

  const exportFile = useCallback(() => {
    const wscols = [{ wch: 5 }, { wch: 20 }, { wch: 30 }, { wch: 35 }];
    const ws = utils.json_to_sheet(
      dataBantuan.map((item) => {
        return {
          No: item.indexRow,
          NIK: item.NIK,
          "Kepala Keluarga": item.KepalaKeluarga,
          Alamat: item.Alamat,
        };
      }),
      {
        header: ["No", "NIK", "Kepala Keluarga", "Alamat"],
      }
    );
    ws["!cols"] = wscols;
    ws["!autofilter"] = { ref: "A1:D1" };
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Data");
    writeFileXLSX(wb, getFileName() + ".xlsx");
  }, [dataBantuan]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          my: 1,
          gap: 1,
          flexDirection: { xs: "column", sm: "row" },
          alignItems: { xs: "start", sm: "center" },
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Typography level="h2">
          Daftar Penerima Bantuan Langsung Tunai DD
        </Typography>
        {isLoadingPKH ? null : (
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <Button
              color="primary"
              startDecorator={<SimCardDownloadIcon />}
              size="sm"
              onClick={exportFile}
            >
              Download Data
            </Button>

            <Add />
          </Box>
        )}
      </Box>
      <Table
        dataPKH={dataBantuan}
        mutateData={mutateData}
        isLoading={isLoadingPKH}
      />
    </>
  );
}
