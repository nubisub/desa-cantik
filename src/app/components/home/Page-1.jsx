"use client";
import Box from "@mui/joy/Box";
import { dm_sans } from "@/app/utils/fonts";
import Button from "@mui/joy/Button";
import LoginIcon from "@mui/icons-material/Login";
import { motion, useInView } from "framer-motion";
import Typography from "@mui/joy/Typography";
import * as React from "react";
import { useRef } from "react";
import Link from "next/link";
import NextImage from "next/image";

const bounceTransition = {
  y: {
    duration: 0.4,
    yoyo: Infinity,
    ease: "easeOut",
  },
  backgroundColor: {
    duration: 0,
    yoyo: Infinity,
    ease: "easeOut",
    repeatDelay: 0.8,
  },
};
export default function Page1() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <Box
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
          zIndex: 1,
          width: {
            xs: "90%",
            sm: "90%",
            md: "85%",
            lg: "75%",
            xl: "70%",
          },
          fontSize: {
            xs: "1.2rem",
            sm: "1.5rem",
          },
          fontWeight: "bold",
          my: 4,
          display: "flex",
          justifyContent: "space-between",
        }}
        className={dm_sans.className}
      >
        <Box>
          [Desa
          <span
            style={{
              fontWeight: "normal",
            }}
          >
            Cantik]
          </span>
        </Box>
        <Link href={"/dashboard"}>
          <Button
            color="neutral"
            sx={{
              "&:hover": {
                bgcolor: "rgba(182,182,182,0.13)",
              },
              borderRadius: 100,
              borderColor: "rgba(182,182,182,0.73)",
            }}
            variant="outlined"
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
        </Link>
      </Box>
      <Box
        sx={{
          mt: {
            xs: -12,
            sm: -12,
          },
          width: {
            xs: "90%",
            sm: "90%",
            md: "85%",
            lg: "75%",
            xl: "70%",
          },
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: {
            xs: "center",
          },
        }}
      >
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
                md: "5rem",
                lg: "5rem",
                xl: "6rem",
              },
            }}
            className={dm_sans.className}
          >
            Desa Margoagung
          </Typography>
          <Typography
            component="h2"
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
                md: "5rem",
                lg: "5rem",
                xl: "6rem",
              },
            }}
            className={dm_sans.className}
          >
            Kabupaten <br /> Sleman
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Typography
            sx={{
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
                lg: "65%",
                xl: "65%",
              },
              fontSize: "1.1em",
            }}
            className={dm_sans.className}
          >
            Tempat di mana data dan perubahan bertemu, fokus pada upaya
            mengatasi kemiskinan dan pelaksanaan Program Keluarga Harapan (PKH).
            Memperhatikan penyandang disabilitas dan dampak program inklusif
            terhadap masyarakat yang membutuhkan.
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
            alt="Indonesian Child Image"
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
