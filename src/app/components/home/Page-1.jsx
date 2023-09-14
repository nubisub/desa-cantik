import Sheet from "@mui/joy/Sheet";
import Box from "@mui/joy/Box";
import { dm_sans } from "@/app/utils/fonts";
import Button from "@mui/joy/Button";
import LoginIcon from "@mui/icons-material/Login";
import { motion, useInView } from "framer-motion";
import Typography from "@mui/joy/Typography";
import * as React from "react";
import { useRef } from "react";
import Link from "next/link";
import { useAuth } from "../../context/AuthContext";

export default function Page1() {
	const currentUser = useAuth();
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
	return (
		<Sheet
			sx={{
				minHeight: "100vh",
				bgcolor: "#EFEEED",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Box
				sx={{
					zIndex: 1,
					width: "70%",
					fontSize: "1.7em",
					fontWeight: "bold",
					my: 4,
					display: "flex",
					justifyContent: "space-between",
				}}
				className={dm_sans.className}
			>
				<Box>
					[Desa
					<span
						style={{
							fontWeight: "normal",
						}}
					>
						Cantik]
					</span>
				</Box>
				<Link
					href={
						currentUser?.currentUser === null ? "/auth/signin" : "/dashboard"
					}
				>
					<Button
						color="neutral"
						sx={{
							"&:hover": {
								bgcolor: "rgba(182,182,182,0.13)",
							},
							borderRadius: 100,
							borderColor: "rgba(182,182,182,0.73)",
						}}
						size="lg"
						variant="outlined"
					>
						Masuk
						<LoginIcon
							sx={{
								ml: 1,
							}}
						/>
					</Button>
				</Link>
			</Box>
			<Box
				sx={{
					mt: -12,
					width: "70%",
					flexGrow: 1,
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
				}}
			>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<Typography
						component="h1"
						sx={{
							fontWeight: "normal",
							color: "#060039",
							lineHeight: "100%",
							letterSpacing: "-0.02em",
							fontSize: "2rem",
							"@media (min-width:600px)": {
								fontSize: "6rem",
							},
						}}
						className={dm_sans.className}
					>
						Desa Margoagung
					</Typography>
					<Typography
						component="h2"
						sx={{
							fontWeight: "normal",
							color: "#060039",
							lineHeight: "100%",
							letterSpacing: "-0.02em",
							fontSize: "2rem",
							"@media (min-width:600px)": {
								fontSize: "6rem",
							},
						}}
						className={dm_sans.className}
					>
						Kabupaten <br /> Sleman
					</Typography>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.5 }}
				>
					<Typography
						sx={{
							width: "60%",
							fontSize: "1.1em",
						}}
						className={dm_sans.className}
					>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
						consequatur dolorum incidunt ipsa iure provident quasi repellendus
						ut veritatis! Doloribus dolorum excepturi ipsam nam reiciendis
						temporibus voluptates! Minima, nam, odit.
					</Typography>
				</motion.div>
			</Box>
		</Sheet>
	);
}
