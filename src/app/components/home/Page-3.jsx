import * as React from "react";
import { useRef } from "react";
import Box from "@mui/joy/Box";
import NextImage from "next/image";
import { dm_sans } from "@/app/utils/fonts";
import Typography from "@mui/joy/Typography";
import { Stack } from "@mui/joy";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Page2() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const scaleY = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <div>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack
          sx={{
            width: {
              xs: "90%",
              sm: "70%",
            },
          }}
          direction="column"
          spacing={6}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            ref={ref}
            style={{
              scaleX: scaleX,
              scaleY: scaleY,
              bgColor: "#ff0000",
              paddingBottom: "50px",
              "@media (min-width:600px)": {
                paddingBottom: "100px",
                paddingTop: "100px",
              },
            }}
          >
            <Box>
              <Typography
                component="h1"
                sx={{
                  mt: {
                    xs: 6,
                    md: 6,
                  },
                  mb: {
                    xs: 2,
                    md: 3,
                  },
                  fontWeight: "normal",
                  color: "text.primary",
                  lineHeight: "100%",
                  letterSpacing: "-0.02em",
                  fontSize: "2rem",
                  my: 6,
                  "@media (min-width:600px)": {
                    fontSize: "3rem",
                  },
                }}
                className={dm_sans.className}
              >
                Program Keluarga Harapan
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                gap: 2,
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
              }}
            >
              <Typography
                component="h1"
                sx={{
                  fontWeight: "normal",
                  color: "text.secondary",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                  },
                  "@media (min-width:600px)": {
                    fontSize: "1.1rem",
                  },
                }}
                className={dm_sans.className}
              >
                Pemerintah Indonesia telah mengambil langkah berani dalam upaya
                mengatasi kemiskinan melalui berbagai kebijakan, salah satunya
                adalah Program Keluarga Harapan (PKH). PKH adalah program
                perlindungan sosial yang dirancang untuk memberikan bantuan
                keuangan kepada keluarga miskin dan rentan di seluruh negeri.
                Tujuan utama dari PKH adalah meningkatkan kesejahteraan keluarga
                yang berada dalam kondisi ekonomi yang sulit dengan memberikan
                bantuan tunai secara berkala. Dengan adanya PKH, pemerintah
                berusaha untuk mengurangi tingkat kemiskinan, meningkatkan akses
                pendidikan, kesehatan, dan nutrisi bagi keluarga miskin, serta
                mendorong mereka untuk meningkatkan produktivitas ekonomi.
              </Typography>
              <NextImage
                src="/program-keluarga-harapan.jpg"
                alt="Indonesian Child Image"
                width={0}
                height={0}
                layout="responsive"
                style={{ objectFit: "cover", maxWidth: "450px" }}
                quality={100}
                blurDataURL="/stunting-image.jpg"
              />
            </Box>
          </motion.div>
        </Stack>
      </Box>
      <Box
        sx={{
          maxHeight: "130vh",
          minHeight: "130vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <NextImage
          src="/disabilitas.jpg"
          width={0}
          height={0}
          sizes="50vw"
          style={{
            width: "100%",
            height: "60vh",
            objectFit: "cover",
            objectPosition: "initial",
          }}
          blurDataURL="/disabilitas.jpg"
          alt={"Disabilitas Image"}
        />
        <Stack
          sx={{
            width: {
              xs: "90%",
              sm: "70%",
            },
          }}
          direction="column"
          spacing={6}
        >
          <div>
            <Box>
              <Typography
                component="h1"
                sx={{
                  fontWeight: "normal",
                  color: "text.primary",
                  lineHeight: "100%",
                  letterSpacing: "-0.02em",
                  fontSize: "2rem",
                  my: 8,
                  mb: 2,
                  "@media (min-width:600px)": {
                    fontSize: "3rem",
                  },
                }}
                className={dm_sans.className}
              >
                Menuju Masyarakat yang Inklusif: Memahami dan Mendukung
                Disabilitas
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                flexDirection: {
                  xs: "column",
                  sm: "row",
                },
              }}
            >
              <Typography
                component="h1"
                sx={{
                  fontWeight: "normal",
                  color: "text.secondary",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.2rem",
                  },
                  mb: {
                    xs: 16,
                    md: 0,
                  },
                  "@media (min-width:600px)": {
                    fontSize: "1.1rem",
                  },
                }}
                className={dm_sans.className}
              >
                Tantangan disabilitas adalah bagian dari realitas kemanusiaan
                yang harus kita akui dan hadapi dengan tanggung jawab bersama.
                Disabilitas dapat bersifat fisik, kognitif, atau sensorik, dan
                individu yang mengalaminya memiliki hak yang sama untuk
                menjalani kehidupan yang bermakna dan produktif. Untuk
                menciptakan masyarakat yang inklusif, kita perlu memastikan
                bahwa mereka memiliki akses yang sama ke pendidikan, pekerjaan,
                dan berbagai kesempatan lainnya. Inklusi bukanlah sekadar
                konsep, melainkan komitmen kita untuk mendukung, menghargai, dan
                memberdayakan individu dengan disabilitas sehingga mereka dapat
                berpartisipasi sepenuhnya dalam masyarakat. Dengan bersama-sama
                mengatasi stereotip dan hambatan, kita dapat menciptakan dunia
                yang lebih adil, ramah disabilitas, dan penuh makna bagi semua
                orang.
              </Typography>
            </Box>
          </div>
        </Stack>
      </Box>
    </div>
  );
}
