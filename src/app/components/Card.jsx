import { Card, CardContent } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip from "@mui/joy/Tooltip";
import AccessibleIcon from "@mui/icons-material/Accessible";
import IconButton from "@mui/joy/IconButton";
import Box from "@mui/joy/Box";
import { lato } from "@/app/utils/fonts";
import { Paid } from "@mui/icons-material";

export default function CardDashboard() {
  return (
    <>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        invertedColors
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
                  fontSize: "1rem",
                  fontWeight: "500",
                  color: "text.primary",
                }}
                variant="h6"
              >
                Penerima BLT
              </Typography>
              <Tooltip
                title="Jumlah Penerima Bantuan Langsung Tunai"
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
              <span className={lato.className}>96</span>
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
            <IconButton color="primary" variant="soft">
              <Paid
                sx={{
                  fontSize: "1.5rem",
                }}
              />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
        invertedColors
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
                  fontSize: "1rem",
                  fontWeight: "500",
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
              <span className={lato.className}>54</span>
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
            <IconButton color="warning" variant="soft">
              <AccessibleIcon
                sx={{
                  fontSize: "1.5rem",
                }}
              />
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
