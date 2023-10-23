"use client";
import Box from "@mui/joy/Box";
import Link from "next/link";
import NextImage from "next/image";
import * as React from "react";
import Tooltip from "@mui/joy/Tooltip";
import Button from "@mui/joy/Button";
import LoginIcon from "@mui/icons-material/Login";
import Typography from "@mui/joy/Typography";
import NavbarData from "@/app/components/home/NavbarData";
import { useMotionValueEvent, useScroll } from "framer-motion";

export default function Navbar(props) {
  const { scrollYProgress } = useScroll();
  const [isSticky, setIsSticky] = React.useState(false);
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.22) {
      setIsSticky(true);
      console.log("true");
    } else {
      setIsSticky(false);
      console.log("false");
    }
  });
  return (
    <Box
      component="header"
      className="Header"
      {...props}
      sx={[
        {
          display: {
            xs: "none",
            md: "flex",
          },
          p: 2,
          px: "10%",
          gap: 2,
          backgroundColor: "#EFEEED",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          gridColumn: "1 / -1",
          borderColor: "divider",
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1100,
          transition: "all 0.3s ease-in-out",
          ...(isSticky && {
            backgroundColor: "#ffffff",
            borderBottom: "1px solid #E0E0E0",
            boxShadow: "0px 1px 1px rgba(0, 0, 0, 0.1)",
          }),
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: {
            xs: 0.8,
            md: 2,
          },
        }}
      >
        <Tooltip
          title={"Desa Cinta Statistik"}
          arrow
          variant="outlined"
          size="sm"
        >
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            href={"/#beranda-desa-cantik"}
          >
            <NextImage
              src={"/logo-desacantik.png"}
              alt={"Desa Cantik Logo"}
              width={0}
              height={0}
              layout="responsive"
              style={{
                objectFit: "cover",
                maxWidth: "40px",
              }}
            />
          </Link>
        </Tooltip>
        <Tooltip
          title={"Pemerintah Kabupaten Sleman"}
          arrow
          variant="outlined"
          size="sm"
        >
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            href={"https://slemankab.go.id/"}
            target={"_blank"}
          >
            <NextImage
              src={"/logo-sleman.png"}
              alt={"Pemkab Sleman Logo"}
              width={0}
              height={0}
              layout="responsive"
              style={{ objectFit: "cover", maxWidth: "30px" }}
            />
          </Link>
        </Tooltip>
        <Tooltip
          title={"BPS Kabupaten Sleman"}
          arrow
          variant="outlined"
          size="sm"
        >
          <Link
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            href={"https://slemankab.bps.go.id/"}
            target={"_blank"}
          >
            <NextImage
              src={"/logo-bps-sleman.png"}
              alt={"Pemkab Sleman Logo"}
              width={0}
              height={0}
              layout="responsive"
              style={{
                objectFit: "cover",
                maxWidth: "230px",
              }}
            />
          </Link>
        </Tooltip>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: {
            xs: 0.8,
            md: 3,
          },
        }}
      >
        {NavbarData.map((item, index) => {
          return (
            <Link
              onClick={() => {
                props.setPath(item.path);
              }}
              key={index}
              style={{
                textDecoration: "none",
                textUnderlineOffset: "0.2em",
              }}
              href={item.path}
            >
              <Typography
                sx={{
                  textDecoration: props.idPath === item.path ? "underline" : "",
                }}
                level="title-md"
              >
                {item.title}
              </Typography>
            </Link>
          );
        })}
        <Link
          style={{ textDecoration: "none", marginLeft: "20px" }}
          href={"/dashboard"}
        >
          <Tooltip
            title={"Masuk ke Dashboard"}
            arrow
            variant="outlined"
            size="sm"
          >
            <Button
              color="primary"
              sx={{
                borderRadius: 100,
                borderColor: "rgba(182,182,182,0.73)",
                display: {
                  xs: "none",
                  md: "flex",
                },
                textDecoration: "none",
                p: 1,
                px: 3,
              }}
              variant="solid"
            >
              Masuk
              <LoginIcon
                sx={{
                  ml: {
                    xs: 0,
                    sm: 1,
                  },
                }}
              />
            </Button>
          </Tooltip>
        </Link>
      </Box>
    </Box>
  );
}
