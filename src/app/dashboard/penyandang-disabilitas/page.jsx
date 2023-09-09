import Breadcrumbs from "@/app/components/BreadCrumbs";
import * as React from "react";

export default function Page() {
  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: "Dashboard",
            href: "/",
          },
          {
            label: "Penyandang Disabilitas",
            href: "/penyandang-disabilitas",
          },
        ]}
      />
    </>
  );
}