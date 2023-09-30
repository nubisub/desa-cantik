import { Stack } from "@mui/joy";
import { data } from "@/app/components/FooterData";
import Link from "next/link";
import Typography from "@mui/joy/Typography";
import Box from "@mui/joy/Box";
import { inter } from "@/app/utils/fonts";

export default function Footer() {
  // check window scroll with framer motion

  return (
    <Box
      sx={{
        py: 4,
        px: {
          xs: 6,
          sm: 4,
        },
        backgroundColor: "#000000",
      }}
    >
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        my={2}
      >
        {data.map((item, index) => (
          <Link
            key={index}
            href={item.socialLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            {item.socialIcon}
          </Link>
        ))}
      </Stack>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "#ffffff",
            fontSize: "0.9em",
          }}
          className={inter.className}
        >
          © 2023 - {new Date().getFullYear()} BPS Kabupaten Sleman - All Rights
          Reserved
        </Typography>
      </Stack>
    </Box>
  );
}
