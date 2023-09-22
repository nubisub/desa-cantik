"use client";
import * as React from "react";
import { useColorScheme } from "@mui/joy/styles";
import Box from "@mui/joy/Box";
import { ResponsiveBar } from "@nivo/bar";

export default function Chart({ chartData, tipeDisabilitas }) {
  const { mode, systemMode } = useColorScheme();
  const data = chartData;
  // make array of my object tipeDisabilitas with Kedisabilitasan value
  const jenisUnique = tipeDisabilitas.map((e) => e.Kedisabilitasan);

  const keys = Object.keys(data);

  const theme = {
    axis: {
      fontSize: "14px",
      tickColor: "#eee",
      ticks: {
        line: {
          stroke: "#555555",
        },
        text: {
          fill: "#ffffff",
        },
      },
      legend: {
        text: {
          fill: "#aaaaaa",
        },
      },
    },
    grid: {
      line: {
        stroke: "#555555",
      },
    },
  };
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        color: "#000",
      }}
    >
      <ResponsiveBar
        data={data}
        keys={jenisUnique}
        indexBy={"JenisDisabilitas"}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        theme={mode === "dark" ? theme : null}
        colors={{ scheme: mode === "dark" ? "dark2" : "nivo" }}
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
              id: "Wicara",
            },
            id: "dots",
          },
          {
            match: {
              id: "Psikososial (Psikotik)",
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
          legend: "Ragam Disabilitas",
          legendPosition: "middle",
          legendOffset: 40,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            itemTextColor: mode === "dark" ? "#fff" : "#000",
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
        ariaLabel="Ragam Penyandang Disabilitas"
        barAriaLabel={(e) => e.id + ": " + e.formattedValue + e.indexValue}
      />
    </Box>
  );
}
