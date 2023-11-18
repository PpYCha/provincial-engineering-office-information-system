import { createTheme } from "@mui/material/styles";
import React, { useState, useContext, useEffect, useMemo } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { Link as RouterLink, Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";

import {
  Card,
  CardHeader,
  Divider,
  Paper,
  Stack,
  ThemeProvider,
} from "@mui/material";

import FormInput from "../../../components/FormInput";
import Swal from "sweetalert2";
import pgpnsLogo from "../../../assets/PGNS_LOGO.png";
import peoLogo from "../../../assets/peoLogo.jpg";
import { defaultUrl } from "../../../utils/defaultUrl";
import { signInUser } from "../../../api/sign";
import actionHelper from "../../../context/actionHelper";

export default function SignIn() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    msg: "",
    isLoading: false,
    success: "",
    validation_error: "",
  });

  const [msg, setMsg] = useState({
    status: "",
    message: "",
    error: "",
    success: "",
  });

  const { dispatch } = useContext(AuthContext);

  const actions = actionHelper();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    onSignInHandler();
    // hanndleLogin();
  };

  const darkTheme = useMemo(() =>
    createTheme({
      palette: {
        mode: "light",
        type: "light",

        primary: {
          main: "#e65100",
        },
        secondary: {
          main: "#e85611",
        },
      },
    })
  );

  const onSignInHandler = async () => {
    const res = await signInUser(user.email, user.password)
      .then((response) => {
        //Correct Login
        if (response.data.status === 200) {
          setUser({
            success: response.data.success,
            msg: response.data.message,
          });

          const user1 = response.data.data;
          localStorage.setItem("currentUser", JSON.stringify(user1));
          // console.log(user1);
          dispatch({ type: actions.LOGIN, payload: user1 });

          navigate("/dashboard/home");
        }

        //Wrong Password
        if (
          response.data.status === "failed" &&
          response.data.success === false
        ) {
          setMsg({
            message: response.data.message,
          });

          console.log("Wrong Password:", response.data);
          Swal.fire({
            title: "Fail",
            text: response.data.message,
            icon: "error",
            confirmButtonText: "OK!",
          }).then((result) => {
            if (result.isConfirmed) {
            }
          });
        }

        //No Emaill || No Password
        if (
          response.data.status === "failed" &&
          typeof response.data.validation_error !== "undefined"
        ) {
          setMsg({
            error: response.data.validation_error,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const inputs = [
    {
      id: "email",
      label: "Email Address",
      name: "email",
      pattern: "^[A-Za-z0-9]{3,16}$",
      xs: 12,
      type: "email",
      helperText: typeof msg.error === "undefined" ? false : msg.error.email,
      required: true,
    },
    {
      id: "password",
      label: "Password",
      name: "password",
      type: "password",
      xs: 12,
      helperText: typeof msg.error === "undefined" ? false : msg.error.password,

      required: true,
    },
  ];

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        display={"flex"}
        sx={{ maxHeight: "100vh", backgroundColor: "#F9FAFB" }}
      >
        <Card
          sx={{
            maxWidth: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: (2, 0, 2, 2),
            backgroundColor: "white",
          }}
        >
          <CardHeader
            title={
              <Typography variant="h4">
                Welcome to PGNS Infrastructure Information System
              </Typography>
            }
          />
          <Stack
            direction="row"
            spacing={2}
            divider={<Divider orientation="vertical" flexItem />}
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Box
              component="img"
              sx={{ width: 300, height: 300 }}
              src={pgpnsLogo}
            />
            <Box
              component="img"
              sx={{ width: 250, height: 250 }}
              src={peoLogo}
            />
          </Stack>
        </Card>
        <Container maxWidth="sm">
          <Box
            sx={{
              maxWidth: 480,
              margin: "auto",
              minHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              padding: (12, 0),
            }}
          >
            <Typography variant="h4" gutterBottom>
              Sign in
            </Typography>

            <Typography sx={{ color: "text.secondary", mb: 5 }}>
              Enter your details below.
            </Typography>

            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <Grid container spacing={2}>
                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={user[input.name]}
                    onChange={onChange}
                  />
                ))}
              </Grid>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                size="large"
              >
                Sign In
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}
