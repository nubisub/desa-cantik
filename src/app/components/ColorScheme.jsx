"use client";
import { useColorScheme } from "@mui/joy/styles";
import * as React from "react";
import IconButton from "@mui/joy/IconButton";
import Tooltip from "@mui/joy/Tooltip";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";

export default function ColorScheme() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return <IconButton size="sm" variant="soft" color="neutral" />;
  }
  return (
    <Tooltip
      title={mode === "light" ? "Dark mode" : "Light mode"}
      arrow
      placement="bottom"
      size="sm"
      variant="solid"
    >
      <IconButton
        id="toggle-mode"
        size="sm"
        variant="soft"
        color="neutral"
        onClick={() => {
          if (mode === "light") {
            setMode("dark");
          } else {
            setMode("light");
          }
        }}
      >
        {mode === "light" ? <DarkModeRoundedIcon /> : <LightModeRoundedIcon />}
      </IconButton>
    </Tooltip>
  );
}
