import * as React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Typography from "@mui/joy/Typography";
import Link from "next/link";

const TentangData = [
  {
    icon: <PlaceIcon />,
    color: "success",
    title: "Alamat",
    description: (
      <Typography level="body-sm">
        Jalan Tegal Gentan, Margoagung Seyegan, Bulu, Margoagung, Kec. Seyegan,
        Kabupaten Sleman, Daerah Istimewa Yogyakarta 55561.
      </Typography>
    ),
  },
  {
    icon: <PhoneIcon />,
    color: "success",
    title: "Telepon/HP",
    description: (
      <ul style={{ margin: "0px", listStylePosition: "outside" }}>
        <li>
          <Typography level="body-sm">0274.868405 ext.7964, 7965</Typography>
        </li>
        <li>
          <Typography level="body-sm">087812093319</Typography>
        </li>
        <li>
          <Typography level="body-sm">081323572238</Typography>
        </li>
      </ul>
    ),
  },
  {
    icon: <EmailIcon />,
    color: "success",
    title: "Email",
    description: (
      <Typography level="body-sm">
        <Link
          style={{
            fontWeight: "bold",
            color: "#1786ff",
            textDecorationThickness: "1.3px",
          }}
          href="mailto:margoagungjogja@gmail.com"
        >
          margoagungjogja@gmail.com
        </Link>
      </Typography>
    ),
  },
];

export default TentangData;
