"use client";
import * as React from "react";
import Tooltip from "@mui/joy/Tooltip";
import IconButton from "@mui/joy/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Box from "@mui/joy/Box";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

export default function BackToTop() {
  // if window.scrollY > 1000, show the button
  const { scrollY } = useScroll();
  const [showButton, setShowButton] = React.useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  });

  const show = {
    opacity: 1,
    display: "block",
  };

  const hide = {
    opacity: 0,
    transitionEnd: {
      display: "none",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={showButton ? show : hide}
      transition={{ duration: 0.6 }}
    >
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 25,
        }}
      >
        <Tooltip
          title={"Kembali Ke Atas"}
          arrow
          color="neutral"
          placement="left"
          size="md"
          variant="soft"
        >
          <IconButton
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            size="lg"
            variant="soft"
            color="neutral"
            borderRadius={"50px"}
          >
            <ArrowUpwardIcon size="lg" />
          </IconButton>
        </Tooltip>
      </Box>
    </motion.div>
  );
}
