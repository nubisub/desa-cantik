import { Stack } from "@mui/joy";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import TentangData from "@/app/components/home/TentangData";
import Map from "@/app/components/home/Map";
import { dm_sans } from "@/app/utils/fonts";
import IconButton from "@mui/joy/IconButton";
import Link from "next/link";

export default function Page5(props) {
  return (
    <Box
      id={"tentang-desa-cantik"}
      sx={{
        borderTop: "1px solid #e0e0e0",
        bgcolor: "#ffffff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Map />
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
          width: {
            xs: "90%",
            sm: "90%",
            md: "85%",
            lg: "80%",
          },
        }}
        direction="column"
      >
        <Box
          id={"hubungi-desa-cantik"}
          sx={{
            my: {
              xs: 4,
              sm: 6,
              md: 12,
            },
          }}
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
              Hubungi Kami
            </Typography>
          </Box>
          <Box
            sx={{
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
            {TentangData.map((item, index) => (
              <Card
                key={index}
                orientation="vertical"
                variant="plain"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  width: {
                    xs: "100%",
                    sm: "30%",
                    md: "30%",
                  },
                }}
              >
                <Link target={"_blank"} href={item.href}>
                  <IconButton
                    variant="soft"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      p: 1,
                      borderRadius: "50%",
                    }}
                  >
                    {item.icon}
                  </IconButton>
                </Link>

                <CardContent
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </Typography>
                  {item.description}
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
