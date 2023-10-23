"use client";
import * as React from "react";
import Box from "@mui/joy/Box";
import { ResponsiveBar } from "@nivo/bar";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

const GetChartData = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_HOST}/api/disabilitas/chart`,
    fetcher,
    { refreshInterval: 15000, revalidateOnFocus: false }
  );
  return {
    chartDataSWR: data,
    error: error,
    isLoadingChartData: isLoading,
  };
};

const GetTipeDisabilitas = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_HOST}/api/disabilitas/tipe-disabilitas`,
    fetcher,
    { refreshInterval: 300000, revalidateOnFocus: false }
  );
  return {
    tipeDisabilitasSWR: data,
    error: error,
    isLoadingTipeDisabilitas: isLoading,
  };
};

export default function Chart({
  chartDisabilitas,
  tipeDisabilitas,
  modeColor,
}) {
  const mode = modeColor;
  const { tipeDisabilitasSWR, isLoadingTipeDisabilitas } = GetTipeDisabilitas();
  const { chartDataSWR, isLoadingChartData } = GetChartData();
  // get window width
  const [windowWidth, setWindowWidth] = React.useState(0);
  React.useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const data = isLoadingChartData ? chartDisabilitas : chartDataSWR;
  const dataTipeDisabilitas = isLoadingTipeDisabilitas
    ? tipeDisabilitas
    : tipeDisabilitasSWR;

  const jenisUnique = dataTipeDisabilitas.map((e) => e.Kedisabilitasan);

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
    <>
      <Box
        sx={{
          height: "100%",
          width: "100%",
          color: "#000",
        }}
      >
        <ResponsiveBar
          layout={windowWidth < 600 ? "horizontal" : "vertical"}
          data={data}
          keys={jenisUnique}
          indexBy={"JenisDisabilitas"}
          margin={{
            top: 50,
            right: windowWidth < 600 ? 30 : 170,
            bottom: 50,
            left: 60,
          }}
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
          legends={
            windowWidth < 600
              ? []
              : [
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
                ]
          }
          role="application"
          ariaLabel="Ragam Penyandang Disabilitas"
          barAriaLabel={(e) => e.id + ": " + e.formattedValue + e.indexValue}
        />
      </Box>
    </>
  );
}
