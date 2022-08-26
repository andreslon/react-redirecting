import "./App.css";
import CustomizedList from "./components/home";
import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";

export default function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container>
        <CustomizedList></CustomizedList>
      </Container>
    </React.Fragment>
  );
}
