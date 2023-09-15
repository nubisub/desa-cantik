"use client";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Link from "next/link";
import Input from "@mui/joy/Input";
import Typography from "@mui/joy/Typography";
import { toast, Toaster } from "sonner";
import Card from "@mui/joy/Card";
import { useRouter } from "next/navigation";

import { signUp } from "../../services/auth";

export default function Page() {
	const [isLoading, setIsLoading] = useState();
	const router = useRouter();
	
	// check if there is environment variable for allowSignUp if not set it to false
	const allowSignUp = process.env.NEXT_PUBLIC_ALLOW_SIGNUP || false;

	function handleLogin(e) {
		setIsLoading(true);
		e.preventDefault();
		const { email, password, passwordRepeat } = e.target.elements;
		if (!allowSignUp) {
			toast.error("Pendaftaran ditutup");
			setIsLoading(false);
			return;
		}

		if (password.value !== passwordRepeat.value) {
			toast.error("Password tidak sama");
			setIsLoading(false);

			return;
		}

		if (!email.value || !password.value) {
			toast.error("Email dan password harus diisi");
			setIsLoading(false);

			return;
		}

		if (!email.value.includes("@")) {
			toast.error("Email harus valid");
			setIsLoading(false);

			return;
		}

		if (password.value.length < 6) {
			toast.error("Password minimal 6 karakter");
			setIsLoading(false);

			return;
		}

		signUp(email.value, password.value)
			.then((userCredential) => {
				toast.success("Akun berhasil dibuat, selamat datang :)");
				// wait for 2 seconds
				setTimeout(() => {
					// after 2 seconds redirect to dashboard
					router.push("/dashboard");
				}, 1000);

				// router.push("/dashboard");
			})
			.catch((error) => {
				if (error.code === "auth/email-already-in-use") {
					toast.error("Email sudah digunakan");
				} else {
					toast.error("Login gagal ", {
						description: "Terjadi kesalahan, silahkan coba lagi"
					});
				}
				setIsLoading(false);
			});
	}

	return (
		<>
			<Box>
				<Toaster position="top-center" richColors closeButton />
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						minHeight: "100vh",
						width:
							"clamp(var(--Form-maxWidth), (var(--Collapsed-breakpoint) - 100vw) * 999, 100%)",
						maxWidth: "100%",
						px: 2,
					}}
				>
					<Box
						component="header"
						sx={{
							py: 3,
							display: "flex",
							alignItems: "center",
							justifyContent: "space-between",
						}}
					></Box>
					<Card
						component="main"
						sx={{
							my: "auto",
							py: 6,
							px: 6,
							display: "flex",
							flexDirection: "column",
							gap: 2,
							width: 400,
							maxWidth: "100%",
							mx: "auto",
							borderRadius: "sm",
						}}
					>
						<div>
							<Typography component="h1" fontSize="xl2" fontWeight="lg">
								Buat Akun
							</Typography>
							<Typography level="body-sm" sx={{ my: 1, mb: 1 }}>
								Selamat datang di Desa Cantik
							</Typography>
						</div>
						<form onSubmit={handleLogin}>
							<FormControl required>
								<FormLabel>Email</FormLabel>
								<Input type="email" name="email" />
							</FormControl>
							<FormControl required>
								<FormLabel>Password</FormLabel>
								<Input type="password" name="password" />
							</FormControl>
							<FormControl required>
								<FormLabel>Konfirmasi Password</FormLabel>
								<Input type="password" name="passwordRepeat" />
							</FormControl>
							<Box
								sx={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									py: 1,
								}}
							>
								<Link fontSize="sm" href="/auth/signin" fontWeight="lg">
									Sudah punya akun?
								</Link>
							</Box>
							<Button type="submit" fullWidth loading={isLoading}>
								Buat Akun
							</Button>
						</form>
					</Card>
					<Box component="footer" sx={{ py: 3 }}>
						<Typography level="body-xs" textAlign="center">
							© Anak Magang {new Date().getFullYear()}
						</Typography>
					</Box>
				</Box>
			</Box>
		</>
	);
}
