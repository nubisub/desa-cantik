import * as React from "react";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import IconButton from "@mui/joy/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import Image from "next/image";
import Typography from "@mui/joy/Typography";
import Tooltip from "@mui/joy/Tooltip";
import LogoutIcon from "@mui/icons-material/Logout";

function Root(props) {
  return (
    <Box
      {...props}
      sx={[
        {
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "minmax(64px, 200px) minmax(450px, 1fr)",
            md: "minmax(160px, 300px) minmax(300px, 1fr) minmax(500px, 1fr)",
          },
          gridTemplateRows: "64px 1fr",
          minHeight: "100vh",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}
function Header(props) {
  return (
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
          gap: 1.5,
        }}
      >
        <IconButton
          variant="outlined"
          size="sm"
          sx={{ display: { md: "none" } }}
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
            fontSize: "1.1em",
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
  );
}

function SideNav(props) {
  return (
    <Box
      component="nav"
      className="Navigation"
      {...props}
      sx={[
        {
          top: 0,
          p: 2,
          bgcolor: "background.surface",
          borderRight: "1px solid",
          borderColor: "divider",
          display: {
            xs: "none",
            md: "initial",
          },
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function SidePane(props) {
  return (
    <Box
      className="Inbox"
      {...props}
      sx={[
        {
          bgColor: "background.surface",
          borderRight: "1px solid",
          borderColor: "divider",
          display: {
            xs: "none",
            md: "initial",
          },
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

function Main(props) {
  return (
    <Box
      component="main"
      className="MainContent"
      sx={{
        px: {
          xs: 2,
          md: 6,
        },
        pt: {
          xs: "calc(12px + var(--Header-height))",
          sm: "calc(12px + var(--Header-height))",
          md: 3,
        },
        pb: {
          xs: 2,
          sm: 2,
          md: 3,
        },
        flex: 1,
        display: "flex",
        flexDirection: "column",
        minWidth: 0,
        gap: 1,
      }}
    >
      {props.children}
    </Box>
  );
}

function SideDrawer({ onClose, ...props }) {
  return (
    <Box
      {...props}
      sx={[
        { position: "fixed", zIndex: 1200, width: "100%", height: "100%" },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      <Box
        role="button"
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: (theme) =>
            `rgba(${theme.vars.palette.neutral.darkChannel} / 0.8)`,
        }}
      />
      <Sheet
        sx={{
          minWidth: 256,
          width: "max-content",
          height: "100%",
          p: 2,
          boxShadow: "lg",
          bgColor: "background.surface",
          left: 0,
        }}
      >
        {props.children}
      </Sheet>
    </Box>
  );
}

export default {
  Root,
  SideNav,
  Header,
  SidePane,
  SideDrawer,
  Main,
};
