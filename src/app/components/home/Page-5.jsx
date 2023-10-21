import { Stack } from "@mui/joy";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import * as React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import TentangData from "@/app/components/home/TentangData";
import Map from "@/app/components/home/Map";

export default function Page5() {
  return (
    <Box
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
        <div
          id={"hubungi-desa-cantik"}

          // initial={{ opacity: 0, scale: 0.9 }}
          // whileInView={{ opacity: 1, scale: 1 }}
          // viewport={{ once: true }}
          // transition={{ duration: 0.6 }}
        >
          <Box
            sx={{
              my: {
                xs: 4,
                sm: 6,
                md: 12,
              },
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
                {/*<CardOverflow*/}
                {/*  variant="soft"*/}
                {/*  color={item.color}*/}
                {/*  sx={{*/}
                {/*    width: "50px",*/}
                {/*    px: 0.2,*/}
                {/*    display: "flex",*/}
                {/*    alignItems: "center",*/}
                {/*    justifyContent: "center",*/}
                {/*    textAlign: "center",*/}
                {/*    fontWeight: "xl",*/}
                {/*    letterSpacing: "1px",*/}
                {/*    textTransform: "uppercase",*/}
                {/*    borderColor: "divider",*/}
                {/*  }}*/}
                {/*>*/}
                {/*  {item.icon}*/}
                {/*</CardOverflow>*/}

                <Box
                  sx={{
                    backgroundColor: "rgba(0,0,0,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 1,
                    borderRadius: "50%",
                  }}
                >
                  {item.icon}
                </Box>

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
        </div>
      </Stack>
    </Box>
  );
}
