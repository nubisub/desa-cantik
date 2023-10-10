"use client";
import useSWR from "swr";
import Table from "./Table";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import * as React from "react";
import { useCallback } from "react";
import Button from "@mui/joy/Button";
import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import { utils, writeFileXLSX } from "xlsx";

const fetcher = (url) => fetch(url).then((r) => r.json());

const getFileName = () => {
  const fileName =
    "Data Gabungan " +
    new Date()
      .toLocaleString()
      .replace(/\//g, "")
      .replace(/,/g, "")
      .replace(/:/g, "")
      .replace(/ /g, "");
  return fileName;
};

const GetData = () => {
  const { data, error, isLoading, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_HOST}/api/gabungan/data`,
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
export default function WrapperData() {
  const { dataDisabilitas, isLoadingDisabilitas, mutateData } = GetData();
  const exportFile = useCallback(() => {
    const wscols = [
      { wch: 5 },
      { wch: 20 },
      { wch: 30 },
      { wch: 10 },
      { wch: 10 },
    ];
    const ws = utils.json_to_sheet(
      dataDisabilitas.map((item) => {
        return {
          No: item.indexRow,
          NIK: item.NIK,
          Nama: item.Nama,
          BLT: item.BLT,
          Disabilitas: item.Disabilitas,
        };
      }),
      {
        header: ["No", "NIK", "Nama", "BLT", "Disabilitas"],
      }
    );
    ws["!cols"] = wscols;
    ws["!autofilter"] = { ref: "A1:D1" };
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
        <Typography level="h2">Data Gabungan</Typography>
        <Button
          color="primary"
          startDecorator={<SimCardDownloadIcon />}
          size="sm"
          onClick={exportFile}
        >
          Download Data
        </Button>
        {/*<Add />*/}
      </Box>
      <Table
        data={dataDisabilitas}
        mutateData={mutateData}
        isLoadingDisabilitas={isLoadingDisabilitas}
      />
    </>
  );
}
