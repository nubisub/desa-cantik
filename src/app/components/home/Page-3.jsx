"use client";
import * as React from "react";
import Box from "@mui/joy/Box";
import { dm_sans } from "@/app/utils/fonts";
import Typography from "@mui/joy/Typography";
import { Stack } from "@mui/joy";
import { motion } from "framer-motion";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import NextImage from "next/image";
import CardData from "@/app/components/home/CardData";

export default function Page2(props) {
  return (
    <>
      <Box
        id={"latar-belakang-desa-cantik"}
        sx={{
          minHeight: "100vh",
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
              lg: "80%",
            },
          }}
          direction="column"
          spacing={6}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            // ref={ref}
            style={{
              // scaleX: scaleX,
              // scaleY: scaleY,
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
                  mt: {
                    xs: 6,
                    md: 6,
                  },
                  mb: {
                    xs: 2,
                    md: 3,
                  },
                  fontWeight: "normal",
                  color: "text.primary",
                  lineHeight: "100%",
                  letterSpacing: "-0.02em",
                  fontSize: "2rem",
                  my: 6,
                  "@media (min-width:600px)": {
                    fontSize: "3rem",
                  },
                }}
                className={dm_sans.className}
              >
                Latar Belakang
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-between",

                alignItems: "stretch",
                gap: 2,
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
              }}
            >
              {CardData.map((item, index) => {
                return (
                  <Card
                    key={index}
                    variant="outlined"
                    sx={{
                      width: {
                        xs: "100%",
                        sm: "48%",
                        md: "48%",
                        lg: "23.5%",
                      },
                    }}
                  >
                    <CardOverflow>
                      <AspectRatio ratio="2">
                        <NextImage
                          src={item.logo}
                          width={100}
                          height={100}
                          alt={item.altLogo}
                          layout="responsive"
                          quality={100}
                          blurDataURL="/stunting-image.jpg"
                        />
                      </AspectRatio>
                    </CardOverflow>
                    <CardContent>
                      <Typography
                        sx={{
                          fontWeight: "500",
                        }}
                      >
                        {item.instansi}
                      </Typography>
                      <Typography level="body-sm">
                        {item.description}
                      </Typography>
                    </CardContent>
                    <CardOverflow
                      variant="soft"
                      sx={{ bgcolor: "background.level1" }}
                    >
                      <Divider inset="context" />
                      <CardContent orientation="horizontal">
                        <Typography
                          level="body-xs"
                          fontWeight="md"
                          textColor="text.secondary"
                        >
                          {item.peraturan}
                        </Typography>
                      </CardContent>
                    </CardOverflow>
                  </Card>
                );
              })}
            </Box>
          </motion.div>
        </Stack>
      </Box>
    </>
  );
}
