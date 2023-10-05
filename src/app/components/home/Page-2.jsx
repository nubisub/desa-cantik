"use client";
import * as React from "react";
import { useRef } from "react";
import Box from "@mui/joy/Box";
import NextImage from "next/image";
import { dm_sans } from "@/app/utils/fonts";
import Typography from "@mui/joy/Typography";
import { Stack } from "@mui/joy";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Page2() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scaleY = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <div>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#060039",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          sx={{
            width: {
              xs: "90%",
              sm: "90%",
              md: "85%",
              lg: "75%",
              xl: "70%",
            },
          }}
          direction="column"
          spacing={6}
        >
          <motion.div
            id={"kemiskinan"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            ref={ref}
            style={{
              scaleX: scaleX,
              scaleY: scaleY,
              bgColor: "#ff0000",
              paddingBottom: "50px",
              "@media (min-width:600px)": {
                paddingBottom: "100px",
                paddingTop: "100px",
              },
            }}
          >
            <Box>
              <Typography
                component="h1"
                sx={{
                  fontWeight: "normal",
                  color: "#ffffff",
                  lineHeight: "100%",
                  letterSpacing: "-0.02em",
                  fontSize: "2rem",
                  mt: {
                    xs: 6,
                    md: 6,
                  },
                  mb: {
                    xs: 2,
                    md: 3,
                  },
                  "@media (min-width:600px)": {
                    fontSize: "3rem",
                  },
                }}
                className={dm_sans.className}
              >
                Pencanangan Desa Cinta Statistik
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
                gap: 3,
              }}
            >
              <NextImage
                src="/bg-cover.jpeg"
                alt="Indonesian Child Image"
                width={0}
                height={0}
                layout="responsive"
                style={{ objectFit: "cover", maxWidth: "420px" }}
                quality={100}
                blurDataURL="/stunting-image.jpg"
              />

              <Typography
                component="h1"
                sx={{
                  minWidth: "360px",
                  fontWeight: "normal",
                  color: "#ffffff",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                  },
                  "@media (min-width:600px)": {
                    fontSize: "1.1rem",
                  },
                }}
                className={dm_sans.className}
              >
                Desa Cinta Statistik merupakan program yang dilaksanakan oleh
                Badan Pusat Statistik (BPS). Program ini bertujuan untuk
                memberikan literasi kepada perangkat desa/kelurahan dalam
                memahami data dan indikator yang dicakup dalam Regsosek dan
                melakukan identifikasi pemanfaatan data Regsosek untuk kebutuhan
                desa dalam rangka upaya mengentaskan kemiskinan.
                <br></br>
                Pada tahun 2023, Kalurahan Margoagung, Kapanewon Seyegan,
                Kabupaten Sleman terpilih sebagai Desa Cinta Statistik.
                Pencanangan Desa Cantik dilaksanakan pada tanggal 27 September
                2023 yang dihadiri oleh Wakil Bupati Sleman dan Kepala BPS
                Provinsi DIY.
              </Typography>
            </Box>
          </motion.div>
        </Stack>
      </Box>
    </div>
  );
}
