import { width } from "@mui/system";
import React from "react";
import { Container, Grid, Stack, Avatar, Button } from "@mui/material";
import { Box } from "@mui/system";
import SideMenu from "../../components/SideMenu";
import YWFooter from "../YWFooter";
import "../../styles/NanGang.css";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import NanGangVideo from "../../Videos/NanGangShowcase.mp4"

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import NanGangWall from "../../components/NanGangPhotoWall";

function NanGang() {

  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("lg");
  const handleOpen = () => {  
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <>
      <Container maxWidth="false" disableGutters={true} sx={{ width: "100%" }}>
        <Box>
          {/* <ElevationScroll {...props}> */}
          <SideMenu></SideMenu>
          {/* </ElevationScroll> */}
        </Box>
      </Container>
      <Container
        disableGutters={true}
        maxWidth="false"
        sx={{
          Width: "100vw",
          px: "0",
          mx: "0",
          pt: "10vh",
          background: "#dadada",
        }}
      >
        <Box className="nangangIntro">
          <h1>Welcome</h1>
          <h3>
            NanGang Supply Inventory Management System is built at the request
            of local government and Medical agencies to battle Covid-19. The
            application create an fast and reliable interface to mange medical
            materials and supplies between hospitals,quarantine hotels, PRC Test Centers and
            storage facilities. In short, an inventory managing application to
            save medical stuff from logistic nightmares.
          </h3>
        </Box>
      </Container>
   



      <Container
      Container
      disableGutters={true}
      maxWidth="false"
      className="videoIntro">
        <Card  sx={{ minWidth: 300, flexGrow: 1 , height:"30vw"}}>
          <CardCover>
            <video
              autoPlay
              loop
              muted
            //   poster="https://assets.codepen.io/6093409/river.jpg"
            >
              <source
                src={NanGangVideo}
                type="video/mp4"
              />
            </video>
          </CardCover>
          <CardContent sx={{ justifyContent: "center", gap: 1 }}>
            <Typography
              level="h6"
              fontWeight="lg"
              textColor="#fff"
              mt={{ xs: 24, sm: 40 }}
            >
              Showcase
            </Typography>
          </CardContent>
        </Card>
        <Button sx={{zIndex:"1"}} onClick={handleOpen}>See More</Button>

      </Container>
      <Container
        id="contactAnchor"
        maxWidth="false"
        disableGutters={true}
        sx={{ width: "100%", height: "20vh" }}
      >
        <Box sx={{ m: "5%" }}>
          <YWFooter></YWFooter>
        </Box>
      </Container>

      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>PhotoGallery</DialogTitle>
        <DialogContent>
          <NanGangWall />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>

    </>
  );
}

export default NanGang;
