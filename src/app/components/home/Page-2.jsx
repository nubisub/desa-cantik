import Sheet from "@mui/joy/Sheet";
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
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.85, 1]);
  const scaleY = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  return (
    <div>
      <Sheet
        sx={{
          minHeight: "100vh",
          bgcolor: "#060039",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack sx={{ width: "70%" }} direction="column" spacing={6}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            viewport={{ once: true }}
            ref={ref}
            style={{
              scaleX: scaleX,
              scaleY: scaleY,
              bgColor: "#ff0000",
              paddingBottom: "100px",
              paddingTop: "100px",
            }}
          >
            <Box>
              <Typography
                component="h1"
                sx={{
                  fontWeight: "normal",
                  color: "#ffffff",
                  lineHeight: "100%",
                  letterSpacing: "-0.02em",
                  fontSize: "2rem",
                  "@media (min-width:600px)": {
                    fontSize: "3rem",
                  },
                }}
                className={dm_sans.className}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt dolores illum magni pariatur?
              </Typography>
            </Box>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="start"
              spacing={6}
            >
              <NextImage
                src="/stunting-image.jpg"
                alt="Indonesian Child Image"
                width={550}
                height={300}
                style={{ objectFit: "cover" }}
                quality={100}
                blurDataURL="/stunting-image.jpg"
              />
              <Typography
                component="h1"
                sx={{
                  fontWeight: "normal",
                  color: "#ffffff",
                  fontSize: "2rem",
                  "@media (min-width:600px)": {
                    fontSize: "1rem",
                  },
                }}
                className={dm_sans.className}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt dolores illum magni pariatur? Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Aliquid aspernatur commodi
                culpa ea esse exercitationem id laborum odio perferendis ratione
                recusandae repellat, similique suscipit, ullam veniam veritatis
                vero vitae voluptatem. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Aspernatur cumque dolores ex exercitationem
                expedita incidunt ipsum nemo numquam pariatur qui quidem quo
                recusandae repellendus, tempora tempore temporibus ut vel
                veritatis. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit. Accusamus alias assumenda commodi cum, enim ipsum iusto
                molestiae mollitia natus, necessitatibus nostrum numquam odio
                placeat quam quo sunt tenetur unde! Praesentium?
              </Typography>
            </Stack>
          </motion.div>
        </Stack>
      </Sheet>
      <Box
        sx={{
          minHeight: "100vh",
        }}
      ></Box>
    </div>
  );
}
