"use client";
import useSWR from "swr";
import Table from "./Table";

const fetcher = (url) => fetch(url).then((r) => r.json());

const GetData = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_HOST}/api/pengguna/data`,
    fetcher,
    { refreshInterval: 15000, revalidateOnFocus: true }
  );
  return {
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
  const { dataUser, isLoadingUser } = GetData();
  const { dataRoles, isLoadingRoles } = GetRoles();
  if (isLoadingUser) {
    return <div>Loading...</div>;
  }
  if (isLoadingRoles) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Table data={dataUser.users} listRoles={dataRoles.roles} />
    </>
  );
}
