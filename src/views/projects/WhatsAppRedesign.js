import { Container, Grid, Stack, Avatar } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SideMenu from "../../components/SideMenu";
import { Toolbar } from "@mui/material";
import Login from "../../Images/Login.png";
import Chat01 from "../../Images/Chat01.png";
import Chat02 from "../../Images/Chat02.png";
import Chat03 from "../../Images/Chat03.png";
import "../../styles/WhatsApp.css";

function WhatsApp() {
  return (
    <>
      <Container maxWidth="false" disableGutters={true} sx={{ width: "100%" }}>
        <Box>
          {/* <ElevationScroll {...props}> */}
          <SideMenu></SideMenu>
          {/* </ElevationScroll> */}
          <Toolbar disableGutters={true} />
        </Box>
      </Container>
      <Container
        disableGutters={true}
        maxWidth="false"
        sx={{ Width: "100vw", px: "0", mx: "0", background: "#dadada" }}
      >
        <Box sx={{ mx: "10vw", height: "80vh" }}>
          <Grid container spacing={0}>
            <Grid xs={12} item>
              <Box>
                <Stack direction="row" spacing={15}>
                  <img className="imgFit" src={Login} alt="Login page" />
                  <div className="wIntro">
                    <h2>
                      <h1>Welcome </h1>
                      To WhatsApp Redesign Project. It aimed to imporve overall
                      user experience. It is a group project made during
                      College. We redesigned the application in terms of visual
                      effect and functionality.
                    </h2>
                  </div>
                </Stack>
              </Box>
            </Grid>
            <Grid xs={12} item>
              <Box>
                <Stack direction="row" spacing={15}>
                  <div className="Content">
                    <h2>
                      <h1>Color Scheme</h1>
                      We feel like the original color scheme is too cold and
                      lack the ability to provide a comfortable enviroment for
                      users, therefore, we made changes to color scheme. We only
                      made minor changes due to the reason of branding. Instead
                      we focused on redesigning secondary colors, improving
                      contast and provide a more comfortable experience.
                    </h2>
                  </div>
                  {/* <img className="imgFit" src={Chat01} alt="Chat page 01" /> */}
                  <div>
                    <div className="colorPicker colorPicker01"></div>
                    <div className="colorPicker colorPicker02"></div>
                    <div className="colorPicker colorPicker03"></div>
                    <div className="colorPicker colorPicker04"></div>
                  </div>
                </Stack>
              </Box>
            </Grid>

            <Grid xs={12} item>
              <Box>
                <Stack direction="row" spacing={2}>
                  <img className="imgFit" src={Chat01} alt="Login page" />
                  <img className="imgFit" src={Chat02} alt="Login page" />

                  <div className="Content">
                    <p className="lChatContent">
                      <h1>Chats </h1>
                      &ensp; Here comes our List of Chats pages. Since this is
                      the first page that users will see after login, it took
                      some discussions to decide what we should put on there.
                      Here is the result. The most important feature we added is
                      a floating action button that could be use to create text,
                      group and broadcast ( sending same message to multiple
                      people without adding them in a group ). The reason is
                      that after research, we found out that new users had
                      trouble starting. To solve this, we added the button to
                      shorten learning cureve as well as provinding a shortcut.
                    </p>
                  </div>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}
export default WhatsApp;
