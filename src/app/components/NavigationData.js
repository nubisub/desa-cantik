import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import GroupsIcon from "@mui/icons-material/Groups";
import * as React from "react";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import JoinFullIcon from "@mui/icons-material/JoinFull";

const Data = [
  {
    label: "Beranda",
    href: "/dashboard",
    icon: <FolderOpenIcon fontSize="small" />,
  },
  {
    label: "Kelola Pengguna",
    href: "/dashboard/kelola-pengguna",
    icon: <AdminPanelSettingsIcon fontSize="small" />,
  },
  {
    label: "Bantuan Langsung Tunai DD",
    href: "/dashboard/bantuan-langsung-tunai",
    icon: <GroupsIcon fontSize="small" />,
  },
  {
    label: "Penyandang Disabilitas",
    href: "/dashboard/penyandang-disabilitas",
    icon: <AccessibleForwardIcon fontSize="small" />,
  },
  {
    label: "Data Gabungan",
    href: "/dashboard/data-gabungan",
    icon: <JoinFullIcon fontSize="small" />,
  },
];

export default Data;
