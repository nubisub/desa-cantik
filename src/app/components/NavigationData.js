import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import GroupsIcon from "@mui/icons-material/Groups";
import * as React from "react";
import AccessibleForwardIcon from "@mui/icons-material/AccessibleForward";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

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
    label: "Program Keluarga Harapan",
    href: "/dashboard/program-keluarga-harapan",
    icon: <GroupsIcon fontSize="small" />,
  },
  {
    label: "Penyandang Disabilitas",
    href: "/dashboard/penyandang-disabilitas",
    icon: <AccessibleForwardIcon fontSize="small" />,
  },
];

export default Data;
