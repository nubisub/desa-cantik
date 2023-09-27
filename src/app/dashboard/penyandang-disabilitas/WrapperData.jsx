"use client";
import useSWR from "swr";
import Table from "./Table";

const fetcher = (url) => fetch(url).then((r) => r.json());

const GetData = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_HOST}/api/disabilitas/data`,
    fetcher
  );
  return {
    dataDisabilitas: data,
    error: error,
    isLoadingDisabilitas: isLoading,
  };
};
const GetFilterKedisabilitasan = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_HOST}/api/disabilitas/tipe-disabilitas`,
    fetcher
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
    fetcher
  );
  return {
    dataFilterKemiskinan: data,
    error: error,
    isLoadingFilterKemiskinan: isLoading,
  };
};

export default function WrapperData() {
  const { dataDisabilitas, isLoadingDisabilitas } = GetData();
  const { dataFilterKedisabilitasan, isLoadingFilterKedisabilitasan } =
    GetFilterKedisabilitasan();
  const { dataFilterKemiskinan, isLoadingFilterKemiskinan } =
    GetFilterKemiskinan();

  if (isLoadingDisabilitas) {
    return <div>Loading...</div>;
  }
  if (isLoadingFilterKedisabilitasan) {
    return <div>Loading...</div>;
  }
  if (isLoadingFilterKemiskinan) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Table
        data={dataDisabilitas}
        listKemiskinan={dataFilterKemiskinan}
        listDisabilitas={dataFilterKedisabilitasan}
      />
    </>
  );
}
