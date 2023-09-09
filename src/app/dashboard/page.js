import * as React from "react";
import Breadcrumbs from "@/app/components/BreadCrumbs";

export default function Home(children) {
  return (
    <>
      <Breadcrumbs
        items={[
          {
            label: "Dashboard",
            href: "/",
          },
        ]}
      />
    </>
  );
}
