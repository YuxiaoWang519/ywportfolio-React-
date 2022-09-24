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


import Home02 from "../../WechatMIni/Home02.jpg"
import map01 from "../../WechatMIni/map01.jpg"
import news01 from "../../WechatMIni/News01.jpg"
import ranking01 from "../../WechatMIni/Ranking01.jpg"
import setting01 from "../../WechatMIni/setting01.jpg"
import signUp01 from "../../WechatMIni/SignUp01.jpg"
import stat01 from "../../WechatMIni/Stat01.jpg"
import PhotoWall from "../../components/PhotoWall";

function Anniversary() {

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
        sx={{ Width: "100vw", px: "0", mx: "0",pt:"10vh", background: "#dadada" }}
      >
        <Box sx={{ mx: "10vw", height: "80vh" }}>
          <Grid container rowSpacing={5}>
            <Grid xs={12} item>
              <Box>
                <Stack direction="row" spacing={15}>
                  <img className="imgFit" src={Home02} alt="Login page" />
                  <div className="wIntro">
                    <h2>
                      <h1>Welcome </h1>
                       This WeChat mini program is built for the 70th Anniversary of HeiLongJiang Institute of Technology at the request of School 
                       Board. The purpose of the application is to encourage student, school stuff and alumnus to participate in the Anniversary as well
                       as exercising. So here is what we come up with, a light weight mini project that people can easily participate. Apology ahead, this 
                       is a two men project and we only had a month to develop not to mention I knew nothing about developing a WeChat mini program and my 
                       friend know nothing about front-end. So bear with the roughness, Let me show you our work.
                    </h2>
                  </div>
                </Stack>
              </Box>
            </Grid>
            

            <Grid xs={12} item>
              <Box>
                <Stack direction="row" spacing={30}>
                  <div className="Content">
                    <h2>
                      <h1>Progress Page</h1>
                      
                      <br></br>
                      &ensp;By tapping the "GO" button, the application will acquire steps counts from WeChat Run if user had that enabled and added into 
                      our data base. The progress bar indicate the total number of steps that user have since first open our application. When that reach 
                      100 percent, congratulations, you will get a e-certificate from school that you can show off to your friends. 
                    </h2>
                  </div>
                  <img className="imgFit" src={map01} alt="chat page" />
                </Stack>
              </Box>
            </Grid>
            <Grid xs={12} item>
              <Box>
                <Stack direction="row" spacing={30}>
                  <img className="imgFit" src={news01} alt="chat page" />
                  <div className="Content">
                    <h2>
                      <h1>News Page </h1>
                      
                      <br></br>
                      One of the purpose for this app is to make participants to pay more attention to the news related to Anniversary. After contacting 
                      the school board, we get access to school website where we can get data(news page) directly from there to keep our news page up to date.
                    </h2>
                  </div>
                </Stack>
              </Box>
            </Grid>
            <Grid xs={12} item>
              <Box>
                <Stack direction="row" spacing={10}>
                  <div className="Content">
                    <h2>
                      <h1>Ranking</h1>
                      <br></br>
                      Well, What's the point of using this app if you can share your progress. Here we go, solute to the king or questionires of exercising.
                     This page show top 30 person who have the most steps each day and of course you position in all participants. 
                    </h2>
                  </div>
                  <img className="imgFit" src={ranking01} alt="chat page" />
                  
                </Stack>
              </Box>
            </Grid>
            <Grid xs={12} item>
              <Box>
                <Stack direction="row" spacing={10}>
                  <img className="imgFit" src={setting01} alt="chat page" />
                  
                  <div className="Content">
                    <h2 className="contactContent">
                      <h1>Settings </h1>
                      <br></br>
                      From top to bottom, we have "Profile", "History", "Customer support", "Authorization setting", "Report an Issue" and version number. 
                      I will show you the Profile and History later. We have a built in Customer support system and report function, since we don't really
                      have a customer support team. The messages will go directly to us. This helped us a lot when we are doing private testing where people 
                      can report problems to us. The Authorization setting will go directly to Wechat Authorization settings where users have control over 
                      whether or not to give us authorizations. 
                    </h2>
                  </div>
                </Stack>
              </Box>
            </Grid>
            <Grid xs={12} item>
              <Box>
                <Stack direction="row" spacing={10}>
                  <div className="contactContent">
                    <h2>
                      <h1>Setting --Profile</h1>
                      <br></br>
                      Well this is just a form for our user to edit or update their information where we would use that for rankings and e-certificate. Since people 
                      usually don't use their real name for their WeChat username, we had to create this feature for people who want to use their real name in the 
                      application. 
                      <br />
                    </h2>
                  </div>
                  <img className="imgFit" src={signUp01} alt="chat page" />
                </Stack>
              </Box>
            </Grid>
            <Grid xs={12} item>
              <Box>
                <Stack direction="row" spacing={10}>
                  <img className="imgFit" src={stat01} alt="chat page" />
                  <div className="Content">
                    <h2>
                      <h1>Setting --History </h1>
                      <br></br>
                       We create this feature because we think it would be fun to have some stat to show user their histories. This provide our user a way to see how 
                       they are doing daily, weekly and monthly. 
                      <br />
                    </h2>
                  </div>
                </Stack>
              </Box>
            </Grid>
            <Grid xs={12} item>
              <Box>
                <h1>
                  That's pretty much all about our mini project. We had around 300 users on first day launch and reached 1000 in a week which actually surprised me.
                  Anyway, we had a lot fun in making this mini projects. Solving problems and learning along the way. If you are interested in me, let me know, scroll down, 
                  sent me an email. Best Wishes!!
                </h1>
              </Box>
            </Grid>
           
         

            <Grid item xs={12}>
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
            </Grid>
          </Grid>
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
          <PhotoWall />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Anniversary;
