"use client";
import React, { useCallback } from "react";
import useSWR from "swr";
import Table from "./Table";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Add from "@/app/dashboard/penyandang-disabilitas/Add";
import Button from "@mui/joy/Button";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import { utils, writeFileXLSX } from "xlsx";

const getFileName = () => {
  const fileName =
    "Penyandang Disabilitas Margoagung " +
    new Date()
      .toLocaleString()
      .replace(/\//g, "")
      .replace(/,/g, "")
      .replace(/:/g, "")
      .replace(/ /g, "");
  return fileName;
};

const fetcher = (url) => fetch(url).then((r) => r.json());

const GetData = () => {
  const { data, error, isLoading, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_HOST}/api/disabilitas/data`,
    fetcher,
    { refreshInterval: 15000, revalidateOnFocus: true }
  );
  return {
    mutateData: mutate,
    dataDisabilitas: data,
    error: error,
    isLoadingDisabilitas: isLoading,
  };
};
const GetFilterKedisabilitasan = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_HOST}/api/disabilitas/tipe-disabilitas`,
    fetcher,
    { refreshInterval: 60000, revalidateOnFocus: false }
  );
  return {
    dataFilterKedisabilitasan: data,
    error: error,
    isLoadingFilterKedisabilitasan: isLoading,
  };
};

const GetFilterKemiskinan = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_HOST}/api/disabilitas/tipe-kemiskinan`,
    fetcher,
    { refreshInterval: 60000, revalidateOnFocus: false }
  );
  return {
    dataFilterKemiskinan: data,
    error: error,
    isLoadingFilterKemiskinan: isLoading,
  };
};

export default function WrapperData() {
  const { dataDisabilitas, isLoadingDisabilitas, mutateData } = GetData();
  const { dataFilterKedisabilitasan, isLoadingFilterKedisabilitasan } =
    GetFilterKedisabilitasan();
  const { dataFilterKemiskinan, isLoadingFilterKemiskinan } =
    GetFilterKemiskinan();

  const exportFile = useCallback(() => {
    const wscols = [
      { wch: 5 },
      { wch: 30 },
      { wch: 20 },
      { wch: 20 },
      { wch: 30 },
      { wch: 20 },
      { wch: 20 },
    ];
    const ws = utils.json_to_sheet(
      dataDisabilitas.map((item) => {
        return {
          No: item.indexRow,
          Nama: item.Nama,
          NIK: item.NIK,
          "No. KK": item.NOKK,
          Alamat: item.Alamat,
          Kemiskinan: item.Kemiskinan,
          "Tipe Disabilitas": item.Kedisabilitasan,
        };
      }),
      {
        header: [
          "No",
          "Nama",
          "NIK",
          "No. KK",
          "Alamat",
          "Kemiskinan",
          "Tipe Disabilitas",
        ],
      }
    );
    ws["!cols"] = wscols;
    ws["!autofilter"] = { ref: "A1:G1" };
    const wb = utils.book_new();
    utils.book_append_sheet(wb, ws, "Data");
    writeFileXLSX(wb, getFileName() + ".xlsx");
  }, [dataDisabilitas]);

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
        <Typography level="h2">Daftar Penyandang Disabilitas</Typography>
        {isLoadingDisabilitas ? null : (
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <Button
              color="primary"
              onClick={exportFile}
              startDecorator={<SimCardDownloadIcon />}
              size="sm"
            >
              Download Data
            </Button>
            <Add />
          </Box>
        )}
      </Box>
      <Table
        data={dataDisabilitas}
        listKemiskinan={dataFilterKemiskinan}
        listDisabilitas={dataFilterKedisabilitasan}
        mutateData={mutateData}
        isLoading={isLoadingDisabilitas}
      />
    </>
  );
}
