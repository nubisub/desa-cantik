"use client";
import useSWR from "swr";
import Table from "./Table";

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
        mutateData={mutateData}
      />
    </>
  );
}
