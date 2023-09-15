import { Card, CardContent, CircularProgress, SvgIcon } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip from "@mui/joy/Tooltip";
import Image from "next/image";
import { dm_sans } from "@/app/utils/fonts";
import Box from "@mui/joy/Box";
import { dark } from "@mui/material/styles/createPalette";

export default function CardDashboard() {
	return (
		<>
			<Card
				sx={{
					p: 0,
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
							p: 2,
							py: 0.7,
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
					</CardContent>
					<Divider orientation="horizontal" />
					<CardContent
						sx={{
							p: 2,
							display: "flex",
							flexDirection: "row",
							gap: 2,
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Box
							sx={{
								borderRadius: 100,
								border: "1px solid",
								borderColor: "divider",

								p: 1,
								width: 80,
								height: 80,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Image
								src="/dashboard/poverty.png"
								width={40}
								height={40}
								alt="Picture of the author"
							/>
						</Box>
						<Typography
							sx={{
								fontSize: "4rem",
								fontWeight: "500",
								color: "text.primary",
								fontFamily: dm_sans.fontFamily,
							}}
							variant="h6"
						>
							<span className={dm_sans.className}>96</span>
						</Typography>
					</CardContent>
				</CardContent>
			</Card>
			<Card
				sx={{
					p: 0,
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
							p: 2,
							py: 0.7,
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
					</CardContent>
					<Divider orientation="horizontal" />
					<CardContent
						sx={{
							p: 2,
							display: "flex",
							flexDirection: "row",
							gap: 2,
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<Box
							sx={{
								borderRadius: 100,
								border: "1px solid",
								borderColor: "divider",
								backgroundColor: "#d6eaff 0.8",
								p: 1,
								width: 80,
								height: 80,
								display: "flex",
								justifyContent: "center",
								alignItems: "center",
							}}
						>
							<Image
								src="/dashboard/disability.png"
								width={40}
								height={40}
								alt="Picture of the author"
							/>
						</Box>
						<Typography
							sx={{
								fontSize: "4rem",
								fontWeight: "500",
								color: "text.primary",
							}}
							variant="h6"
						>
							<span className={dm_sans.className}>63</span>
						</Typography>
					</CardContent>
				</CardContent>
			</Card>
		</>
	);
}
