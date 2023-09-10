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
import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import GroupsIcon from "@mui/icons-material/Groups";
import ChildCareIcon from "@mui/icons-material/ChildCare";

const Data = [
  {
    label: "Beranda",
    href: "/dashboard",
    icon: <FolderOpenIcon fontSize="small" />,
  },
  {
    label: "Program Keluarga Harapan",
    href: "/dashboard/program-keluarga-harapan",
    icon: <GroupsIcon fontSize="small" />,
  },
  {
    label: "Kasus Stunting/Disabilitas",
    href: "/dashboard/penyandang-disabilitas",
    icon: <ChildCareIcon fontSize="small" />,
  },
];

export default function Navigation() {
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
            return (
              <ListItem key={index}>
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
