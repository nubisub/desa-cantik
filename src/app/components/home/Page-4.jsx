"use client";
import { Stack } from "@mui/joy";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { dm_sans } from "@/app/utils/fonts";
import * as React from "react";
import { motion, useScroll } from "framer-motion";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import TujuanData from "@/app/components/home/TujuanData";

export default function Page4() {
  const { scrollYProgress } = useScroll();

  return (
    <Box
      sx={{
        bgcolor: "#EFEEED",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",

        py: {
          xs: 4,
          sm: 6,
          md: 8,
          lg: 12,
        },
      }}
    >
      {/*<NextImage*/}
      {/*  src="/disabilitas.jpg"*/}
      {/*  width={0}*/}
      {/*  height={0}*/}
      {/*  sizes="50vw"*/}
      {/*  style={{*/}
      {/*    width: "100%",*/}
      {/*    height: "60vh",*/}
      {/*    objectFit: "cover",*/}
      {/*    objectPosition: "initial",*/}
      {/*  }}*/}
      {/*  blurDataURL="/disabilitas.jpg"*/}
      {/*  alt={"Disabilitas Image"}*/}
      {/*/>*/}
      <Stack
        sx={{
          my: 2,

          width: {
            xs: "90%",
            sm: "90%",
            md: "85%",
            lg: "80%",
          },
        }}
        direction="column"
        f
        spacing={6}
      >
        <motion.div
          id={"tujuan-desa-cantik"}

          // initial={{ opacity: 0, scale: 0.9 }}
          // whileInView={{ opacity: 1, scale: 1 }}
          // viewport={{ once: true }}
          // transition={{ duration: 0.6 }}
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
                mb: 4,
                "@media (min-width:600px)": {
                  fontSize: "3rem",
                },
              }}
              className={dm_sans.className}
            >
              Tujuan
            </Typography>
          </Box>
          <Box
            sx={{
              mb: 4,
              display: "flex",
              flexWrap: "wrap",
              gap: "1rem",
              justifyContent: "space-between",
              alignItems: "stretch",
              flexDirection: {
                xs: "column",
                sm: "row",
              },
            }}
          >
            {TujuanData.map((item, index) => (
              <Card
                key={index}
                orientation="horizontal"
                variant="outlined"
                sx={{
                  width: {
                    xs: "100%",
                    sm: "48%",
                    md: "48%",
                  },
                }}
              >
                <CardOverflow
                  variant="soft"
                  color={item.color}
                  sx={{
                    width: "50px",
                    px: 0.2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    fontWeight: "xl",
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                    borderColor: "divider",
                  }}
                >
                  {item.icon}
                </CardOverflow>
                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography>{item.tujuan}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </motion.div>
      </Stack>
    </Box>
  );
}
