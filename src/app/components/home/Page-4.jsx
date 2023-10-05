"use client";
import NextImage from "next/image";
import { Stack } from "@mui/joy";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { dm_sans } from "@/app/utils/fonts";
import * as React from "react";
import { motion, useScroll } from "framer-motion";

export default function Page4() {
  const { scrollYProgress } = useScroll();

  return (
    <Box
      sx={{
        bgcolor: "#EFEEED",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
    >
      <NextImage
        src="/disabilitas.jpg"
        width={0}
        height={0}
        sizes="50vw"
        style={{
          width: "100%",
          height: "60vh",
          objectFit: "cover",
          objectPosition: "initial",
        }}
        blurDataURL="/disabilitas.jpg"
        alt={"Disabilitas Image"}
      />
      <Stack
        sx={{
          my: 2,

          width: {
            xs: "90%",
            sm: "70%",
          },
        }}
        direction="column"
        spacing={6}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box>
            <Typography
              component="h1"
              sx={{
                fontWeight: "normal",
                color: "text.primary",
                lineHeight: "100%",
                letterSpacing: "-0.02em",
                fontSize: "2rem",
                my: 8,
                mb: 2,
                "@media (min-width:600px)": {
                  fontSize: "3rem",
                },
              }}
              className={dm_sans.className}
            >
              Menuju Masyarakat yang Inklusif: Memahami dan Mendukung
              Disabilitas
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
            }}
          >
            <Typography
              component="h1"
              sx={{
                fontWeight: "normal",
                color: "text.secondary",
                fontSize: {
                  xs: "1rem",
                  sm: "1.2rem",
                },
                mb: {
                  xs: 8,
                  md: 12,
                },
                "@media (min-width:600px)": {
                  fontSize: "1.1rem",
                },
              }}
              className={dm_sans.className}
            >
              Tantangan disabilitas adalah bagian dari realitas kemanusiaan yang
              harus kita dengan tanggung jawab bersama. Disabilitas dapat
              bersifat fisik, kognitif, atau sensorik, dan individu yang
              mengalaminya memiliki hak yang sama untuk menjalani kehidupan yang
              bermakna dan produktif. Untuk menciptakan masyarakat yang
              inklusif, kita perlu memastikan bahwa mereka memiliki akses yang
              sama ke pendidikan, pekerjaan, dan berbagai kesempatan lainnya.
              Inklusi bukanlah sekadar konsep, melainkan komitmen kita untuk
              mendukung, menghargai, dan memberdayakan individu dengan
              disabilitas sehingga mereka dapat berpartisipasi sepenuhnya dalam
              masyarakat. Dengan bersama-sama mengatasi stereotip dan hambatan,
              kita dapat menciptakan dunia yang lebih adil, ramah disabilitas,
              dan penuh makna bagi semua orang.
            </Typography>
          </Box>
        </motion.div>
      </Stack>
    </Box>
  );
}
