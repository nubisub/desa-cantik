"use client";
import * as React from "react";
import { useState } from "react";
import Page3 from "@/app/components/home/Page-3";
import { motion, useScroll, useSpring } from "framer-motion";
import "./styles.css";
import Page2 from "@/app/components/home/Page-2";
import Page1 from "@/app/components/home/Page-1";
import IconButton from "@mui/joy/IconButton";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Box from "@mui/joy/Box";
import Tooltip from "@mui/joy/Tooltip";

export default function Home(children) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Page1 />
      <Page2 />
      <Page3 />
      <Box
        sx={{
          position: "fixed",
          bottom: 20,
          right: 25,
          display: visible ? "block" : "none",
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
            onClick={scrollToTop}
            size="lg"
            variant="soft"
            color="neutral"
            borderRadius={"50px"}
          >
            <ArrowUpwardIcon size="lg" />
          </IconButton>
        </Tooltip>
      </Box>
    </>
  );
}
