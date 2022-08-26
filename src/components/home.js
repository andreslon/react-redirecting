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

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

import background from "./../bg.png";
import key from "./../key.gif";
import Container from '@mui/material/Container';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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

  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    window.location.replace("https://forms.gle/fqkrF1uxHogH1Mw58");
    setOpen(false);
  };

  return (
    <Box>
      <Paper sx={{ width: "100%", marginBottom: 10 }}>
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
              Hi knight, welcome to the last challenge... to finish, you need
              the final code and only knowing about Team International you will
              get it
            </Typography>
          </Box>

          <Divider />
          <Box
            sx={{
              bgcolor: "#FF9E00",
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
                placeholder="Insert code here"
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
                      "01001001 01011001 01001100 01011010 01010100 01010000 01000101 01001111 01000100";

                    let strVal = c
                      .split(" ")
                      .map((l) => String.fromCharCode(parseInt(l, 2)))
                      .join("");

                    if (strVal === code) {
                      setOpen(true);
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
          {error && <Alert severity="error">Invalid Code</Alert>}

          <Divider />

          <div>
            <iframe
              title="Legendary Player"
              src="https://puzzel.org/en/acrostic/embed?p=-NANh25vr8oPZegnT1kq"
              width="100%"
              height="800"
              frameborder="0"
            ></iframe>
          </div>
        </FireNav>
      </Paper>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Congrats!</DialogTitle>
        <DialogContent>
          <Container maxWidth="sm">
            <img src={key} className="App-key" alt="Legendary Player" />
          </Container>

          <DialogContentText id="alert-dialog-slide-description">
            You are a real Team International Warrior, Thanks for playing our
            game
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Continue</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
