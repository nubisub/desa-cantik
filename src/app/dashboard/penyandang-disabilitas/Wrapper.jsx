"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Page = ({ children }) => {
  const { data, status } = useSession();
  const router = useRouter();
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (data.user.role === "Guest" || typeof data.user.role === "undefined") {
    router.push("/dashboard");
  } else {
    return <>{children}</>;
  }
};
export default Page;
