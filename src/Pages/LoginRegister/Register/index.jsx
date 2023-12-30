import React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Stack } from "@mui/material";
import { useRef } from "react";
import Formhandler from "../../../utils/Formhandler";
import { useEffect } from "react";
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000/">
        Netflix
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const defaultTheme = createTheme();
export default function Register({ setHave }) {
  const [inputs, handleForm] = Formhandler();
  const Nameinp = useRef();
  const handleRegister = () => {
      fetch("http://localhost:3001/users", {
        method: "POST",
        headers:{
          'Content-type':'application/json'
        },
        body: JSON.stringify(inputs),
      });
      setHave(true);
  };
  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                ref={Nameinp}
                onChange={handleForm}
                margin="normal"
                required
                fullWidth
                id="email"
                label="Name"
                name="Name"
                autoComplete="email"
                autoFocus
              />
              <TextField
                onChange={handleForm}
                margin="normal"
                required
                fullWidth
                id="email"
                label="userName"
                name="userName"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                onChange={handleForm}
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <button
                type="button"
                className="btn btn-primary w-100"
                sx={{ mt: 3, mb: 2 }}
                onClick={() => handleRegister()} // اصلاح در اینجا
              >
                Register
              </button>
              <Stack component={"p"}>
                You have any Account?{" "}
                <button
                  className="btn btn-success"
                  onClick={() => setHave(true)}
                >
                  Login
                </button>
              </Stack>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
