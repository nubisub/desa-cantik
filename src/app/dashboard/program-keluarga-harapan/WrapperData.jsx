"use client";
import Table from "./Table";
import useSWR from "swr";

const data = [
  {
    NIK: "246.10.249.100/12",
    KepalaKeluarga: "Nyssa Hillitt",
    Alamat: "61 Vidon Street",
  },
];

const fetcher = (url) => fetch(url).then((r) => r.json());

export const GetData = () => {
  const { data, error, isLoading, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_HOST}/api/bantuan/data`,
    fetcher
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
  if (isLoadingPKH) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Table dataPKH={dataBantuan} mutateData={mutateData} />
    </>
  );
}
