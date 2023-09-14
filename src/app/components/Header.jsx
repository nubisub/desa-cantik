"use client";
import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import Typography from "@mui/joy/Typography";
import Tooltip from "@mui/joy/Tooltip";
import LogoutIcon from "@mui/icons-material/Logout";
import * as React from "react";
import { Drawer, ModalClose } from "@mui/joy";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";
import Data from "./NavigationData";
import { usePathname } from "next/navigation";
import ListItemContent from "@mui/joy/ListItemContent";
import ListItem from "@mui/joy/ListItem";

export default function Header(props) {
  const pathname = usePathname();

  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Box
        component="header"
        className="Header"
        {...props}
        sx={[
          {
            p: 2,
            gap: 2,
            bgcolor: "background.surface",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gridColumn: "1 / -1",
            borderBottom: "1px solid",
            borderColor: "divider",
            position: "sticky",
            top: 0,
            zIndex: 1100,
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
          <IconButton
            variant="outlined"
            size="sm"
            sx={{ display: { md: "none" } }}
            onClick={() => {
              setOpen(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Link href={"/"}>
            <IconButton
              size="sm"
              variant="soft"
              sx={{ display: { xs: "none", md: "inline-flex" }, p: 1 }}
            >
              <Image
                src="/logo-bps.png"
                width={25}
                height={25}
                alt="Picture of the author"
              />
            </IconButton>
          </Link>
          <Typography
            sx={{
              fontSize: { xs: "sm", md: "md" },
            }}
            component="h1"
            fontWeight="500"
          >
            Desa Cantik Margoagung
          </Typography>
        </Box>

        <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
          {props.children}
          <Tooltip
            title={"Keluar"}
            arrow
            color="danger"
            placement="bottom"
            size="sm"
            variant="solid"
          >
            <Link href={"/"}>
              <IconButton size="sm" variant="soft" color="danger">
                <LogoutIcon />
              </IconButton>
            </Link>
          </Tooltip>
        </Box>
      </Box>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 0.5,
            ml: "auto",
            mt: 1,
            mr: 1,
          }}
        >
          <Typography
            component="label"
            htmlFor="close-icon"
            fontSize="sm"
            fontWeight="lg"
            sx={{ cursor: "pointer" }}
          >
            Close
          </Typography>
          <ModalClose id="close-icon" sx={{ position: "initial" }} />
        </Box>
        <List
          size="lg"
          component="nav"
          sx={{
            flex: "none",
            mt: 2,
            mb: 5,
            fontSize: "xl",
            "& > div": { justifyContent: "center" },
          }}
        >
          {Data.map((item, index) => {
            return (
              <ListItem key={index}>
                <Link
                  onClick={() => setOpen(false)}
                  style={{ textDecoration: "none", width: "100%" }}
                  href={item.href}
                >
                  <ListItemButton
                    {...(pathname === item.href ? { selected: true } : {})}
                  >
                    <ListItemContent
                      sx={{
                        textAlign: "center",
                        fontSize: "lg",
                      }}
                    >
                      {item.label}
                    </ListItemContent>
                  </ListItemButton>
                </Link>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </>
  );
}
