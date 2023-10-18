"use client";
import { CardContent } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import Tooltip from "@mui/joy/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Chart from "@/app/components/Chart";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Card from "@mui/joy/Card";
import { useState } from "react";
import Aggregate from "@/app/components/Aggregate";
import Box from "@mui/joy/Box";

function ChartCard({ tipeDisabilitas, chartDisabilitas }) {
  return (
    <Chart tipeDisabilitas={tipeDisabilitas} chartData={chartDisabilitas} />
  );
}

export default function CardWrapper({ tipeDisabilitas, chartDisabilitas }) {
  const [tipe, setTipe] = useState("Grafik");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          mt: 2,
        }}
      >
        <Card
          sx={{
            height: {
              xs: tipe === "Grafik" ? 400 : "auto",
              sm: tipe === "Grafik" ? 400 : "auto",
              xl: tipe === "Grafik" ? 500 : "auto",
            },
            width: "100%",
            pb: tipe === "Grafik" ? 8 : 2,
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
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Typography
                  sx={{
                    fontSize: "0.9rem",
                    fontWeight: "600",
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
              </Box>

              <Select defaultValue="Grafik">
                <Option
                  value="Grafik"
                  onClick={() => {
                    setTipe("Grafik");
                  }}
                >
                  Grafik
                </Option>
                <Option
                  onClick={() => {
                    setTipe("Tabulasi");
                  }}
                  value="Tabulasi"
                >
                  Tabulasi
                </Option>
              </Select>
            </CardContent>
            {tipe === "Grafik" ? (
              <ChartCard
                tipeDisabilitas={tipeDisabilitas}
                chartDisabilitas={chartDisabilitas}
              />
            ) : (
              <Aggregate data={chartDisabilitas} />
            )}
          </CardContent>
        </Card>
      </Box>
    </>
  );
}
