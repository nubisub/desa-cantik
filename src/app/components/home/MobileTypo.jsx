import Box from "@mui/joy/Box";
import { inter } from "@/app/utils/fonts";
import Button from "@mui/joy/Button";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const MobileTypo = () => {
  return (
    <Box
      sx={{
        display: {
          xs: "block",
          md: "none",
        },
      }}
    >
      <main>
        <h1>
          <span className={inter.className}>Desa</span>
          <span className={inter.className}>Margoagung</span>
          <span className={inter.className}>Sleman.</span>
        </h1>

        <h2 className={inter.className}>
          Meningkatkan Literasi Data Demi Kemajuan, Inklusi, dan Pemahaman Lebih
          Luas di Komunitas Pedesaan.
        </h2>
        <Box>
          <Link href={"#kemiskinan"}>
            <Button
              className={inter.className}
              sx={{
                my: 2,
                fontSize: ".9em",
                fontWeight: "400",
                width: "100%",
                backgroundColor: "#000",
                "&:hover": {
                  backgroundColor: "#000",
                },
              }}
              size="lg"
              variant="solid"
            >
              Baca Selengkapnya
            </Button>
          </Link>
          <Link href={"/dashboard"}>
            <Button
              endDecorator={<ArrowForwardIcon />}
              id={"buttonDashboard"}
              className={inter.className}
              sx={{
                color: "#000",
                //   border color animation color change
                borderColor: "#000",
                fontSize: ".9em",
                fontWeight: "400",
                width: "100%",
                backgroundColor: "#fff",
                "&:hover": {
                  backgroundColor: "#fff",
                },
              }}
              size="lg"
              variant="outlined"
            >
              Masuk Ke Dashboard
            </Button>
          </Link>
        </Box>
      </main>
    </Box>
  );
};
export default MobileTypo;
