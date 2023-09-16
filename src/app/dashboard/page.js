"use client";
import * as React from "react";
import Breadcrumbs from "@/app/components/BreadCrumbs";
import Box from "@mui/joy/Box";
import CardDashboard from "@/app/components/Card";
import { Card, CardContent } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip from "@mui/joy/Tooltip";
import { ResponsiveBar } from "@nivo/bar";

const data = [
  {
    country: "AD",
    "hot dog": 124,
    "hot dogColor": "hsl(6, 70%, 50%)",
    burger: 21,
    burgerColor: "hsl(290, 70%, 50%)",
    sandwich: 41,
    sandwichColor: "hsl(64, 70%, 50%)",
    kebab: 176,
    kebabColor: "hsl(201, 70%, 50%)",
    fries: 180,
    friesColor: "hsl(235, 70%, 50%)",
    donut: 104,
    donutColor: "hsl(190, 70%, 50%)",
  },
  {
    country: "AE",
    "hot dog": 187,
    "hot dogColor": "hsl(33, 70%, 50%)",
    burger: 56,
    burgerColor: "hsl(266, 70%, 50%)",
    sandwich: 83,
    sandwichColor: "hsl(131, 70%, 50%)",
    kebab: 167,
    kebabColor: "hsl(349, 70%, 50%)",
    fries: 154,
    friesColor: "hsl(29, 70%, 50%)",
    donut: 82,
    donutColor: "hsl(157, 70%, 50%)",
  },
  {
    country: "AF",
    "hot dog": 98,
    "hot dogColor": "hsl(58, 70%, 50%)",
    burger: 61,
    burgerColor: "hsl(157, 70%, 50%)",
    sandwich: 34,
    sandwichColor: "hsl(222, 70%, 50%)",
    kebab: 92,
    kebabColor: "hsl(18, 70%, 50%)",
    fries: 189,
    friesColor: "hsl(110, 70%, 50%)",
    donut: 178,
    donutColor: "hsl(116, 70%, 50%)",
  },
  {
    country: "AG",
    "hot dog": 82,
    "hot dogColor": "hsl(311, 70%, 50%)",
    burger: 170,
    burgerColor: "hsl(228, 70%, 50%)",
    sandwich: 160,
    sandwichColor: "hsl(310, 70%, 50%)",
    kebab: 85,
    kebabColor: "hsl(141, 70%, 50%)",
    fries: 48,
    friesColor: "hsl(228, 70%, 50%)",
    donut: 112,
    donutColor: "hsl(359, 70%, 50%)",
  },
  {
    country: "AI",
    "hot dog": 86,
    "hot dogColor": "hsl(315, 70%, 50%)",
    burger: 27,
    burgerColor: "hsl(281, 70%, 50%)",
    sandwich: 115,
    sandwichColor: "hsl(293, 70%, 50%)",
    kebab: 3,
    kebabColor: "hsl(114, 70%, 50%)",
    fries: 50,
    friesColor: "hsl(176, 70%, 50%)",
    donut: 157,
    donutColor: "hsl(224, 70%, 50%)",
  },
  {
    country: "AL",
    "hot dog": 124,
    "hot dogColor": "hsl(18, 70%, 50%)",
    burger: 143,
    burgerColor: "hsl(36, 70%, 50%)",
    sandwich: 0,
    sandwichColor: "hsl(324, 70%, 50%)",
    kebab: 63,
    kebabColor: "hsl(18, 70%, 50%)",
    fries: 67,
    friesColor: "hsl(21, 70%, 50%)",
    donut: 30,
    donutColor: "hsl(219, 70%, 50%)",
  },
  {
    country: "AM",
    "hot dog": 20,
    "hot dogColor": "hsl(38, 70%, 50%)",
    burger: 149,
    burgerColor: "hsl(146, 70%, 50%)",
    sandwich: 138,
    sandwichColor: "hsl(241, 70%, 50%)",
    kebab: 168,
    kebabColor: "hsl(207, 70%, 50%)",
    fries: 164,
    friesColor: "hsl(284, 70%, 50%)",
    donut: 81,
    donutColor: "hsl(111, 70%, 50%)",
  },
];

export default function Home() {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Breadcrumbs
          items={[
            {
              label: "Dashboard",
              href: "/",
            },
          ]}
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
          },
          gap: 2,
        }}
      >
        <CardDashboard />
      </Box>
      <Box
        sx={{
          my: 2,
        }}
      >
        <Card
          sx={{
            height: 500,
            width: "100%",
            p: 0,
            pb: 8,
          }}
          variant="outlined"
          invertedColors
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
            orientation="horizontal"
          >
            <CardContent
              sx={{
                p: 2,
                py: 0.7,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography
                sx={{
                  fontSize: "1rem",
                  fontWeight: "500",
                  color: "text.primary",
                }}
                variant="h6"
              >
                Ragam Penyandang Disabilitas
              </Typography>
              <Tooltip
                title="Jumlah Penyandang Disabilitas Menurut Jenisnya"
                variant="solid"
                placement="top"
              >
                <InfoOutlinedIcon
                  sx={{
                    fontSize: "1.1rem",
                    cursor: "pointer",
                  }}
                />
              </Tooltip>
            </CardContent>
            <Divider orientation="horizontal" />

            <ResponsiveBar
              data={data}
              keys={[
                "hot dog",
                "burger",
                "sandwich",
                "kebab",
                "fries",
                "donut",
              ]}
              indexBy="country"
              margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
              padding={0.3}
              valueScale={{ type: "linear" }}
              indexScale={{ type: "band", round: true }}
              colors={{ scheme: "nivo" }}
              defs={[
                {
                  id: "dots",
                  type: "patternDots",
                  background: "inherit",
                  color: "#38bcb2",
                  size: 4,
                  padding: 1,
                  stagger: true,
                },
                {
                  id: "lines",
                  type: "patternLines",
                  background: "inherit",
                  color: "#eed312",
                  rotation: -45,
                  lineWidth: 6,
                  spacing: 10,
                },
              ]}
              fill={[
                {
                  match: {
                    id: "fries",
                  },
                  id: "dots",
                },
                {
                  match: {
                    id: "sandwich",
                  },
                  id: "lines",
                },
              ]}
              borderColor={{
                from: "color",
                modifiers: [["darker", 1.6]],
              }}
              axisTop={null}
              axisRight={null}
              axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "country",
                legendPosition: "middle",
                legendOffset: 32,
              }}
              axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: "food",
                legendPosition: "middle",
                legendOffset: -40,
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor={{
                from: "color",
                modifiers: [["darker", 1.6]],
              }}
              legends={[
                {
                  dataFrom: "keys",
                  anchor: "bottom-right",
                  direction: "column",
                  justify: false,
                  translateX: 120,
                  translateY: 0,
                  itemsSpacing: 2,
                  itemWidth: 100,
                  itemHeight: 20,
                  itemDirection: "left-to-right",
                  itemOpacity: 0.85,
                  symbolSize: 20,
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemOpacity: 1,
                      },
                    },
                  ],
                },
              ]}
              role="application"
              ariaLabel="Nivo bar chart demo"
              barAriaLabel={(e) =>
                e.id + ": " + e.formattedValue + " in country: " + e.indexValue
              }
            />
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
