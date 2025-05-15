import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import movies from "../image/movies.jpg";

function Login() {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Add authentication logic here if needed
    navigate("/home"); // Navigate to the homepage
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${movies})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box
        className="login-container"
        sx={{
          width: 300,
          padding: 3,
          border: "1px solid #ccc",
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <Box sx={{ marginBottom: 2 }}>
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              required
            />
          </Box>
          <Box sx={{ marginBottom: 2 }}>
            <TextField
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
            />
          </Box>
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Login
          </Button>

          <Divider sx={{ marginY: 2 }}>Don't have an account?</Divider>

          <Button
            component={Link}
            to="/signup"
            variant="text"
            color="primary"
            fullWidth
          >
            Signup now
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
