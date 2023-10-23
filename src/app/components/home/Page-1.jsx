"use client";
import Box from "@mui/joy/Box";
import { dm_sans } from "@/app/utils/fonts";
import { motion } from "framer-motion";
import Typography from "@mui/joy/Typography";
import * as React from "react";
import NextImage from "next/image";
import MobileTypo from "@/app/components/home/MobileTypo";

export default function Page1(props) {
  return (
    <Box
      id={"home-hero"}
      sx={{
        minHeight: "100vh",
        bgcolor: "#EFEEED",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          mt: {
            xs: -12,
            sm: 0,
          },
          width: {
            xs: "90%",
            sm: "90%",
            md: "85%",
            lg: "80%",
          },
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: {
            xs: "center",
          },
        }}
      >
        <MobileTypo />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            component="h1"
            sx={{
              textAlign: {
                xs: "center",
                md: "left",
              },
              fontWeight: "normal",
              color: "#060039",
              lineHeight: "100%",
              letterSpacing: "-0.02em",
              fontSize: {
                xs: "2rem",
                sm: "3rem",
                md: "4rem",
                lg: "4rem",
                xl: "5rem",
              },
              display: {
                xs: "none",
                md: "block",
              },
            }}
            className={dm_sans.className}
          >
            Desa Margoagung <br /> Kabupaten <br /> Sleman
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Typography
            sx={{
              display: {
                xs: "none",
                md: "block",
              },
              textAlign: {
                xs: "center",

                md: "left",
              },
              mt: {
                xs: 2,
                sm: 1,
              },
              width: {
                xs: "100%",
                sm: "100%",
                md: "60%",
                lg: "60%",
                xl: "60%",
              },
              fontSize: "1.1em",
            }}
            className={dm_sans.className}
          >
            Tempat di mana data dan perubahan bertemu, fokus pada upaya
            mengatasi kemiskinan dan pelaksanaan Bantuan Langsung Tunai Dana
            Desa. Memperhatikan penyandang disabilitas dan dampak program
            inklusif terhadap masyarakat yang membutuhkan.
          </Typography>
        </motion.div>
      </Box>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
            },
          }}
        >
          <NextImage
            src="/bg-home.png"
            alt="Assets"
            width={0}
            height={0}
            layout="responsive"
            style={{
              objectFit: "cover",
              maxWidth: "500px",
              position: "absolute",
              bottom: 0,
              right: 0,
            }}
            quality={100}
            blurDataURL="/stunting-image.jpg"
          />
        </Box>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Box
          sx={{
            display: {
              xs: "none",
              sm: "none",
              md: "none",
              lg: "block",
              xl: "block",
            },
          }}
        >
          <NextImage
            src="/bg-home2.png"
            alt="Indonesian Child Image"
            width={0}
            height={0}
            layout="responsive"
            style={{
              objectFit: "cover",
              maxWidth: "30px",
              position: "absolute",
              bottom: 40,
              left: 40,
            }}
            quality={100}
            blurDataURL="/stunting-image.jpg"
          />
        </Box>
      </motion.div>
    </Box>
  );
}
