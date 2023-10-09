"use client";
import useSWR from "swr";
import Table from "./Table";

const fetcher = (url) => fetch(url).then((r) => r.json());

const GetData = () => {
  const { data, error, isLoading, mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_HOST}/api/pengguna/data`,
    fetcher,
    { refreshInterval: 15000, revalidateOnFocus: true }
  );
  return {
    mutateData: mutate,
    dataUser: data,
    error: error,
    isLoadingUser: isLoading,
  };
};
const GetRoles = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_HOST}/api/pengguna/roles`,
    fetcher
  );
  return {
    dataRoles: data,
    error: error,
    isLoadingRoles: isLoading,
  };
};

export default function WrapperData() {
  const { dataUser, isLoadingUser, mutateData } = GetData();
  const { dataRoles, isLoadingRoles } = GetRoles();

  return (
    <>
      <Table
        mutateData={mutateData}
        data={dataUser}
        listRoles={dataRoles?.roles}
        isLoadingUser={isLoadingUser}
        isLoadingRoles={isLoadingRoles}
      />
    </>
  );
}
