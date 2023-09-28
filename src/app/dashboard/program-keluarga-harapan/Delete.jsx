"use client";
import { useSession } from "next-auth/react";

const Page = ({ children }) => {
  const { data, status } = useSession();

  if (status === "loading") {
    return <></>;
  }

  if (data.user?.role === "Viewer") {
    return <></>;
  } else {
    return <>{children}</>;
  }
};
export default Page;
