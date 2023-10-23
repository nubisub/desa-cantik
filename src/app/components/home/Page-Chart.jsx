import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import { dm_sans } from "@/app/utils/fonts";
import Chart from "@/app/components/Chart";
import { Stack } from "@mui/joy";

export default function PageChart({ tipeDisabilitas, chartDisabilitas }) {
  return (
    <Box
      id={"chart-desa-cantik"}
      sx={{
        bgcolor: "#FBFAF8",
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
              Ragam Penyandang Disabilitas
            </Typography>
            <Typography
              sx={{
                width: {
                  xs: "100%",
                  sm: "100%",
                  md: "70%",
                  lg: "70%",
                },
              }}
            >
              Grafik di bawah ini memvisualisasikan ragam penyandang disabilitas
              di Desa Margoagung. Data ini mencakup lima jenis disabilitas yang
              umum terjadi, yaitu disabilitas mental, fisik, intelektual, ganda,
              dan sensorik.
            </Typography>
          </Box>
          <Box
            sx={{
              height: {
                xs: 400,
                sm: 350,
                xl: 400,
              },
              width: "100%",
            }}
            variant="outlined"
            invertedColors
          >
            <Chart
              modeColor={"light"}
              tipeDisabilitas={tipeDisabilitas}
              chartDisabilitas={chartDisabilitas}
            />
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
