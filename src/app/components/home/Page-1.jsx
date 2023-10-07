"use client";
import Box from "@mui/joy/Box";
import { dm_sans } from "@/app/utils/fonts";
import Button from "@mui/joy/Button";
import LoginIcon from "@mui/icons-material/Login";
import { motion } from "framer-motion";
import Typography from "@mui/joy/Typography";
import * as React from "react";
import Link from "next/link";
import NextImage from "next/image";
import MobileTypo from "@/app/components/home/MobileTypo";
import Tooltip from "@mui/joy/Tooltip";

export default function Page1() {
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
          display: "flex",
          alignItems: "center",
          justifyContent: {
            xs: "center",
            md: "space-between",
          },
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
        }}
        className={dm_sans.className}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 3,
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Tooltip
              title={"Desa Cinta Statistik"}
              arrow
              variant="outlined"
              size="sm"
            >
              <Link href={"/"}>
                <NextImage
                  src={"/logo-desacantik.png"}
                  alt={"Desa Cantik Logo"}
                  width={0}
                  height={0}
                  layout="responsive"
                  style={{
                    objectFit: "cover",
                    maxWidth: "50px",
                  }}
                />
              </Link>
            </Tooltip>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <Tooltip
              title={"Pemerintah Kabupaten Sleman"}
              arrow
              variant="outlined"
              size="sm"
            >
              <Link href={"https://slemankab.go.id/"} target={"_blank"}>
                <NextImage
                  src={"/logo-sleman.png"}
                  alt={"Pemkab Sleman Logo"}
                  width={0}
                  height={0}
                  layout="responsive"
                  style={{ objectFit: "cover", maxWidth: "40px" }}
                />
              </Link>
            </Tooltip>
          </motion.div>
          <Box
            sx={{
              display: {
                md: "block",
                xs: "none",
              },
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Tooltip
                title={"BPS Kabupaten Sleman"}
                arrow
                variant="outlined"
                size="sm"
              >
                <Link href={"https://slemankab.bps.go.id/"} target={"_blank"}>
                  <NextImage
                    src={"/logo-bps-sleman.png"}
                    alt={"Pemkab Sleman Logo"}
                    width={0}
                    height={0}
                    layout="responsive"
                    style={{
                      objectFit: "cover",
                      maxWidth: "260px",
                    }}
                  />
                </Link>
              </Tooltip>
            </motion.div>
          </Box>
          <Box
            sx={{
              display: {
                xs: "block",
                md: "none",
              },
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <Tooltip
                title={"BPS Kabupaten Sleman"}
                arrow
                variant="outlined"
                size="sm"
              >
                <Link href={"https://slemankab.bps.go.id/"} target={"_blank"}>
                  <NextImage
                    src={"/logo-bps.png"}
                    alt={"Pemkab Sleman Logo"}
                    width={0}
                    height={0}
                    layout="responsive"
                    style={{
                      objectFit: "cover",
                      maxWidth: "60px",
                    }}
                  />
                </Link>
              </Tooltip>
            </motion.div>
          </Box>
          {/*<Box>*/}
          {/*  [Desa*/}
          {/*  <span*/}
          {/*    style={{*/}
          {/*      fontWeight: "normal",*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    Cantik]*/}
          {/*  </span>*/}
          {/*</Box>*/}
        </Box>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Link style={{ textDecoration: "none" }} href={"/dashboard"}>
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
        </motion.div>
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
