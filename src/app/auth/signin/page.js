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
import AuthRoute from "../../components/AuthRoute";
import { signIn } from "../../services/auth";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Page() {
  const [isLoading, setIsLoading] = useState();
  const router = useRouter();

  function handleLogin(e) {
    setIsLoading(true);
    e.preventDefault();
    const { email, password } = e.target.elements;
    if (!email.value || !password.value) {
      toast.error("Email dan password harus diisi");
      return;
    }

    if (!email.value.includes("@")) {
      toast.error("Email harus valid");
      return;
    }
    signIn(email.value, password.value)
      .then((userCredential) => {
        toast.success("Login Berhasil, Selamat Datang Kembali :)");
        router.push("/dashboard");
      })
      .catch((error) => {
        toast.error("Login gagal ", {
          description: "Periksa kembali email dan password anda",
        });
        setIsLoading(false);
      });
  }

  return (
    <AuthRoute>
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
          >
            <Link href={"/"}>
              <Button
                startDecorator={<ArrowBackIcon />}
                onClick={function () {}}
                variant="soft"
                color="neutral"
              >
                Kembali Ke Homepage
              </Button>
            </Link>
          </Box>
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
                Masuk ke Akun Anda
              </Typography>
              <Typography level="body-sm" sx={{ my: 1, mb: 1 }}>
                Selamat datang kembali
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  py: 1,
                }}
              >
                <Link fontSize="sm" href="/auth/signup" fontWeight="lg">
                  Belum punya akun?
                </Link>
              </Box>
              <Button type="submit" fullWidth loading={isLoading}>
                Masuk
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
    </AuthRoute>
  );
}
