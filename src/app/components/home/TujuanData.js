import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import StackedLineChartIcon from "@mui/icons-material/StackedLineChart";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import * as React from "react";

const TujuanData = [
  {
    icon: <AutoStoriesIcon />,
    color: "success",
    tujuan:
      "Meningkatkan literasi, kesadaran dan peran aktif perangkat desa/ kelurahan dan masyarakat dalam penyelenggaraan kegiatan statistik\n",
  },
  {
    icon: <GpsFixedIcon />,
    color: "warning",
    tujuan:
      "Standardisasi pengelolaan data statistik untuk menjaga kualitas dan keterbandingan indikator statistik\n",
  },
  {
    icon: <StackedLineChartIcon />,
    color: "danger",
    tujuan:
      "Optimalisasi penggunaan dan pemanfaatan data statistik sehingga program pembangunan di desa/kelurahan tepat sasaran\n",
  },
  {
    icon: <EmojiPeopleIcon />,
    color: "primary",
    tujuan: "Membentuk agen-agen statistik pada level desa/kelurahan\n",
  },
];

export default TujuanData;
