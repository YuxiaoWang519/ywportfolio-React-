import { Container, Grid, Stack, Avatar, Button } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SideMenu from "../../components/SideMenu";
import { Toolbar } from "@mui/material";
import Login from "../../Images/Login.png";
import Chat01 from "../../Images/Chat01.png";
import Chat02 from "../../Images/Chat02.png";
import Chat03 from "../../Images/Chat03.png";
import Chat04 from "../../Images/Chat4.png";
import Contact01 from "../../Images/Contact01.png";
import Contact1 from "../../Images/Contact1.png";
import Contact02 from "../../Images/Contact02.png";
import Contact03 from "../../Images/Contact03.png";
import Settings01 from "../../Images/Settings01.png";
import Settings02 from "../../Images/Settings02.png";
import CreateGroup02 from "../../Images/CreateGroup02.png";
import Story02 from "../../Images/Story02.png";
import "../../styles/WhatsApp.css";
import YWFooter from "../YWFooter";
import { useNavigate } from "react-router";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import PhotoWall from "../../components/PhotoWall";
function WhatsApp() {
  let navigate = useNavigate();
  // const toWhatsAppGallery = () => {
  //   navigate("/Projects/WHatsApp/Gallery");
  // };
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
        sx={{ Width: "100vw", px: "0", mx: "0", background: "#dadada" }}
      >
        <Box sx={{ mx: "10vw", height: "80vh" }}>
          <Grid container rowSpacing={5}>
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
                <Stack direction="row" spacing={10}>
                  <img className="imgFit" src={Chat01} alt="Chat page" />
                  <img className="imgFit" src={Chat02} alt="Chat page" />

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
            <Grid xs={12} item>
              <Box>
                <Stack direction="row" spacing={30}>
                  <div className="Content">
                    <h2>
                      <h1>More Chats! </h1>
                      &ensp; Yeap, and here's how it looks after started a chat.
                      <br></br>
                      &ensp; Again, we only made minor changes here which is
                      made frequent used features more accessible. However, the
                      main dish is hidden in the top right menu botton, which I
                      will talk about in a bit.
                    </h2>
                  </div>
                  <img className="imgFit" src={Chat04} alt="chat page" />
                </Stack>
              </Box>
            </Grid>
            <Grid xs={12} item>
              <Box>
                <Stack direction="row" spacing={30}>
                  <img className="imgFit" src={Chat03} alt="chat page" />
                  <div className="Content">
                    <h2>
                      <h1>Intergrated Chat Setting </h1>
                      Well, here we go.
                      <br></br>
                      This the chat setting, instead of drop box which is used
                      in the official app, we created a new page for it. It is
                      not only more visual enjoyable but also made it easier for
                      user to operate.
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
                      <h1>Contact </h1>
                      <br></br>
                      With the same reason we add a floating action button here
                      as well. I will explain the new category feature later.
                    </h2>
                  </div>
                  <img className="imgFit" src={Contact1} alt="chat page" />
                  <img className="imgFit" src={Contact01} alt="chat page" />
                </Stack>
              </Box>
            </Grid>
            <Grid xs={12} item>
              <Box>
                <Stack direction="row" spacing={10}>
                  <img className="imgFit" src={Contact02} alt="chat page" />
                  <img className="imgFit" src={Contact03} alt="chat page" />
                  <div className="Content">
                    <p className="contactContent">
                      <h1>How to Add Contact？ </h1>
                      <br></br>
                      This is a question many new users confused about according
                      to our questionires. The official version only allow users
                      to add contact via phone number. The problems is sometimes
                      people hesitate to give away their phone numbers
                      exspecially with people they doesn't know very well. Maybe
                      they are afraid of endless scam calls or advertisement or
                      simply just to protect their own privacy. This limited the
                      usability. To fix this, we introduced new ways to add
                      friends!
                      <br></br>
                      With our design, you can add firends via QRcode or simply
                      with an ID. Your privacy are protected! You decide whether
                      or not to show your phone number or to whom.
                    </p>
                  </div>
                </Stack>
              </Box>
            </Grid>
            <Grid xs={12} item>
              <Box>
                <Stack direction="row" spacing={10}>
                  <div className="contactContent">
                    <h2>
                      <h1>Settings </h1>
                      <br></br>
                      Some changes were made to improve setting page as well. If
                      you compare it with the orignal verson, you will find out
                      that we have two more options here: "Categorize Contact"
                      and "Block List". The "Block List" offer users a way to
                      mass modify their block list. The reason to add this is
                      due to the decision about new ways to add friends.
                      Potentially it may result in users having contact that
                      they do not know well thus increasing the usage of feature
                      "Block". With that in mind, to simplify the "Work Load",
                      we introduced the "Block List".
                      <br />
                    </h2>
                  </div>
                  <img className="imgFit" src={Settings02} alt="chat page" />
                </Stack>
              </Box>
            </Grid>
            <Grid xs={12} item>
              <Box>
                <Stack direction="row" spacing={10}>
                  <img className="imgFit" src={Settings01} alt="chat page" />
                  <div className="Content">
                    <h2>
                      <h1>Setting --Categorize Contact </h1>
                      <br></br>
                      Remeber the Categorize in contact page? Let's talk about
                      it now. Do you find it annoying to find a person and add
                      them to a chat group? No? What about you need to add all
                      your colleges or all your high school friends? The feature
                      contact Categorization allow you modify them together. Not
                      getting it? No worries, let me show you what it can do in
                      the next part.
                      <br />
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
                      <h1>Create Group </h1>
                      <br></br>
                      With the feature we talked above, now users can simply
                      select a category and with one sigle tap,"Create Group",
                      Boom, Done!
                    </h2>
                  </div>
                  <img className="imgFit" src={CreateGroup02} alt="chat page" />
                </Stack>
              </Box>
            </Grid>
            <Grid xs={12} item>
              <Box>
                <Stack direction="row" spacing={30}>
                  <img className="imgFit" src={Story02} alt="chat page" />
                  <div className="Content">
                    <h2>
                      <h1>Story</h1>
                      <br></br>
                      You might already noticed that there is a new "Story" tab.
                      This is a new feature we added in order to improve
                      WhatsApp user base. The idea is to make WHatsApp not only
                      a tool to communicate but also where its users can share
                      their life, idea and manymore.
                      <br />
                      <br />
                      Wanna see all the design picture?
                      <Button onClick={handleOpen}>CLick Here</Button>
                    </h2>
                  </div>
                </Stack>
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
export default WhatsApp;
