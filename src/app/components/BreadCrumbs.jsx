import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import Link from "next/link";
import Typography from "@mui/joy/Typography";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import * as React from "react";

export default function BreadCrumbs({ items }) {
  return (
    <Breadcrumbs
      size="sm"
      aria-label="breadcrumbs"
      separator={<ChevronRightRoundedIcon fontSize="sm" />}
      sx={{ pl: 0 }}
    >
      <Link underline="none" color="neutral" href="/" aria-label="Home">
        <HomeRoundedIcon />
      </Link>
      {items.map((item, index) => {
        if (index === items.length - 1) {
          return (
            <Typography
              key={index}
              color="primary"
              fontWeight={500}
              fontSize={12}
            >
              {item.label}
            </Typography>
          );
        }
        return (
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            key={index}
            href={item.href}
            passHref
          >
            <Typography
              underline="hover"
              key={index}
              fontWeight={600}
              fontSize={12}
            >
              {item.label}
            </Typography>
          </Link>
        );
      })}
    </Breadcrumbs>
  );
}
