"use client";
import { Card, CardContent } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip from "@mui/joy/Tooltip";
import AccessibleIcon from "@mui/icons-material/Accessible";
import Box from "@mui/joy/Box";
import { lato } from "@/app/utils/fonts";
import { Paid } from "@mui/icons-material";
import useSWR from "swr";
import Link from "next/link";

const noPointer = { cursor: "default" };
const fetcher = (url) => fetch(url).then((r) => r.json());

const GetJumlahBLT = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_HOST}/api/bantuan/jumlah`,
    fetcher,
    { refreshInterval: 15000, revalidateOnFocus: false }
  );
  return {
    dataBantuan: data,
    error: error,
    isLoadingBantuan: isLoading,
  };
};

const GetJumlahDisabilitas = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.NEXT_PUBLIC_HOST}/api/disabilitas/jumlah`,
    fetcher,
    { refreshInterval: 15000, revalidateOnFocus: false }
  );
  return {
    dataDisabilitas: data,
    error: error,
    isLoadingDisabilitas: isLoading,
  };
};

export default function CardDashboard({ BLT, Disabilitas }) {
  const { dataBantuan, isLoadingBantuan } = GetJumlahBLT();
  const { dataDisabilitas, isLoadingDisabilitas } = GetJumlahDisabilitas();
  return (
    <>
      <Link
        style={{ textDecoration: "none" }}
        href="/dashboard/bantuan-langsung-tunai"
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "background.body",
            "&:hover": {
              border: "1px solid var(--joy-palette-primary-500, #0B6BCB)",
              backgroundColor: "primary.outlinedActiveBg",
            },
          }}
          invertedColors={false}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              height: "100%",
            }}
            orientation="horizontal"
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
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
                  Penerima BLT
                </Typography>
                <Tooltip
                  title="Jumlah Penerima Bantuan Langsung Tunai Dana Desa"
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
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: "500",
                  color: "text.primary",
                }}
                variant="h6"
              >
                {isLoadingBantuan ? (
                  <span className={lato.className}>{BLT}</span>
                ) : (
                  <span className={lato.className}>{dataBantuan?.count}</span>
                )}
              </Typography>
            </CardContent>
            {/*<Divider orientation="horizontal" />*/}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                p: 0.5,
                alignItems: "flex-start",
              }}
            >
              <Box>
                <Paid
                  color="primary"
                  variant="soft"
                  sx={{
                    fontSize: "1.5rem",
                  }}
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Link>

      <Link
        style={{ textDecoration: "none" }}
        href={"/dashboard/penyandang-disabilitas"}
      >
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundColor: "background.body",
            "&:hover": {
              border: "1px solid var(--joy-palette-primary-500, #0B6BCB)",
              backgroundColor: "primary.outlinedActiveBg",
            },
          }}
          invertedColors={false}
        >
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              height: "100%",
            }}
            orientation="horizontal"
          >
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
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
                  Penyandang Disabilitas
                </Typography>
                <Tooltip
                  title="Jumlah Penyandang Disabilitas"
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
              <Typography
                sx={{
                  fontSize: "2rem",
                  fontWeight: "500",
                  color: "text.primary",
                }}
                variant="h6"
              >
                {isLoadingDisabilitas ? (
                  <span className={lato.className}>{Disabilitas}</span>
                ) : (
                  <span className={lato.className}>
                    {dataDisabilitas?.count}
                  </span>
                )}
              </Typography>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                p: 0.5,
                alignItems: "flex-start",
              }}
            >
              <Box>
                <AccessibleIcon
                  color="warning"
                  variant="soft"
                  sx={{
                    fontSize: "1.5rem",
                  }}
                />
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Link>
    </>
  );
}
