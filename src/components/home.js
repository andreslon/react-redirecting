import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";

import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Alert from "@mui/material/Alert";

import background from "./../bg.png"; 
const FireNav = styled(List)({
  "& .MuiListItemButton-root": {
    paddingLeft: 24,
    paddingRight: 24,
  },
  "& .MuiListItemIcon-root": {
    minWidth: 0,
    marginRight: 16,
  },
  "& .MuiSvgIcon-root": {
    fontSize: 20,
  },
});

export default function CustomizedList() {
  const [error, setError] = React.useState(false);
  const [code, setCode] = React.useState("");
  const handleChange = (event) => {
    setCode(event.target.value);
  };
  return (
    <Box>
      <Paper sx={{ width: "100%" }}>
        <FireNav component="nav" disablePadding>
          <img src={background} className="App-bg" alt="Legendary Player" />
          <Divider />
          <Box
            sx={{
              pb: 2,
              p: "10px",
              alignItems: "center",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              Legendary Player
            </Typography>
            <Typography variant="body2" color="text.secondary">
              To obtain the third key you must enter the key that you have
              solved in the acrostic and we will redirect you to the final form.
            </Typography>
          </Box>

          <Divider />

          <Box
            sx={{
              bgcolor: "rgba(71, 98, 130, 0.2)",
              pb: 2,
              p: "10px",
              alignItems: "center",
            }}
          >
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "80%",
                margin: "0 auto",
              }}
              noValidate
              autoComplete="off"
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Write acrostic result to find the last key"
                inputProps={{ "aria-label": "acrostic" }}
                value={code}
                onChange={handleChange}
              />
              <IconButton
                onClick={() => {
                  if (!code) {
                    setError(true);
                  } else {
                    let c =
                      "01001001 01011001 01001100 01011010 01010100 01010000 01000101";

                    let strVal = c
                      .split(" ")
                      .map((l) => String.fromCharCode(parseInt(l, 2)))
                      .join("");

                    if (strVal === code) {
                      window.location.replace(
                        "https://forms.gle/fqkrF1uxHogH1Mw58"
                      );
                      setError(false);
                    } else {
                      setError(true);
                    }
                  }
                }}
                type="button"
                sx={{ p: "10px" }}
                aria-label="search"
              >
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
          {error && <Alert severity="error">Invalid acrostic result</Alert>}
        </FireNav>
      </Paper>
    </Box>
  );
}
