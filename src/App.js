import logo from "./logo.svg";
import "./App.css";
import CustomizedList from "./components/home";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container  >
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        <CustomizedList></CustomizedList>
      </Container>
    </React.Fragment>
  );
}