import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import GroupsIcon from "@mui/icons-material/Groups";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import * as React from "react";

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
    label: "Penyandang Disabilitas",
    href: "/dashboard/penyandang-disabilitas",
    icon: <ChildCareIcon fontSize="small" />,
  },
];

export default Data;
