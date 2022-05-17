import { Grid, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import { Avatar } from "@mui/material";
import { Typography } from "@mui/material";
import { Email } from "@mui/icons-material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import copy from "copy-to-clipboard";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import { Button } from "@mui/material";
import "../styles/Home.css";
function YWFooter() {
  const [clipBoard, setBoard] = React.useState(false);
  const handleCopy = (e) => {
    // console.log("this is eeeeeee", e.target);
    copy(e.target.textContent);
    setBoard(true);
  };
  const handleClose = () => {
    setBoard(false);
  };
  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography sx={{ fontSize: "30px" }}>
            Thank you for scolling down here. If you are interested in me or my
            work, feel free to contact me!
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Stack spacing={5}>
            <Box className="contactHover" onClick={handleCopy}>
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <Avatar>
                  <EmailIcon></EmailIcon>
                </Avatar>
                <Typography id="emailBox" sx={{ fontSize: "30px", ml: "1%" }}>
                  wangyuxiao519@live.com
                </Typography>
              </Stack>
            </Box>
            <Box className="contactHover" onClick={handleCopy}>
              <Stack direction="row" sx={{ alignItems: "center" }}>
                <Avatar>
                  <LocalPhoneIcon></LocalPhoneIcon>
                </Avatar>
                <Typography sx={{ fontSize: "30px", ml: "1%" }}>
                  +1 (416) 276-6784
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Grid>
      </Grid>
      <Snackbar
        open={clipBoard}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Coppied to clipbord"
        action={action}
      />
    </>
  );
}
export default YWFooter;