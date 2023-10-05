"use client";
import * as React from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Icons import
import Data from "./NavigationData";
import { useSession } from "next-auth/react";
import { inter } from "@/app/utils/fonts";

export default function Navigation() {
  const { data, status } = useSession();

  const pathname = usePathname();
  return (
    <List
      size="sm"
      sx={{
        "--ListItem-radius": "8px",
        "--List-gap": "1px",
        position: {
          sm: "inherit",
          md: "fixed",
        },
        minWidth: {
          sm: "inherit",
          md: "225px",
        },
        top: 80,
      }}
    >
      <ListItem nested>
        <List
          aria-labelledby="nav-list-browse"
          sx={{
            "& .JoyListItemButton-root": { p: "8px" },
          }}
        >
          {Data.map((item, index) => {
            //   skip if item label = "Atur Pengguna" and user role != "admin"
            if (
              item.label === "Kelola Pengguna" &&
              data?.user?.role !== "Admin"
            ) {
              return null;
            }
            if (
              item.label === "Program Keluarga Harapan" &&
              (data?.user?.role === "Guest" ||
                typeof data?.user?.role === "undefined")
            ) {
              return null;
            }
            if (
              item.label === "Penyandang Disabilitas" &&
              (data?.user?.role === "Guest" ||
                typeof data?.user?.role === "undefined")
            ) {
              return null;
            }
            return (
              <ListItem
                sx={{
                  fontSize: "0.9em",
                }}
                className={inter.className}
                key={index}
              >
                <Link
                  style={{ textDecoration: "none", width: "100%" }}
                  href={item.href}
                >
                  <ListItemButton
                    {...(pathname === item.href ? { selected: true } : {})}
                  >
                    <ListItemDecorator>{item.icon}</ListItemDecorator>
                    <ListItemContent>{item.label}</ListItemContent>
                  </ListItemButton>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </ListItem>
    </List>
  );
}
