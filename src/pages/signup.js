import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box"; // Import Box for styling
import movies from "../image/movies.jpg"; // Import your background image

function Signup() {
  return (
    <Box
      sx={{
        minHeight: "100vh", // Full viewport height
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${movies})`, // Correctly set the background image
        backgroundSize: "cover", // Ensure the image covers the entire viewport
        backgroundPosition: "center", // Center the image
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
        <h2>Signup</h2>
        <form>
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
              id="username"
              label="Username"
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

          <Divider sx={{ marginY: 2 }}>Already have an account?</Divider>

          <Button
            component={Link}
            to="/"
            variant="text"
            color="primary"
            fullWidth
          >
            Login now
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Signup;
