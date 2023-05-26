import React, { useState, useEffect } from "react";
import { Loading } from "react-loading-ui";

import { useNavigate } from "react-router-dom";
import {
  Stack,
  IconButton,
  InputAdornment,
  TextField,
  Checkbox,
  Button,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import Iconify from "../../../components/iconify/Iconify";

const LoginForm = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    navigate("/dashboard", { replace: true });
  };

  useEffect(() => {
    Loading();
    setTimeout(() => {
      Loading();
    }, 1000);
  }, [navigate]);

  return (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  edge="end"
                >
                  <Iconify
                    icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ my: 2 }}
      >
        <Checkbox name="remember" label="Remember me" />
        <Button variant="subtitle2" underline="hover">
          Forgot password?
        </Button>
      </Stack>

      <LoadingButton
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        onClick={handleClick}
      >
        Login
      </LoadingButton>
    </>
  );
};

export default LoginForm;
