import {
  Container,
  Grid,
  Typography,
  Stack,
  Avatar,
  Paper,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SideMenu from "../components/SideMenu";
import { Toolbar } from "@mui/material";
import YWFooter from "./YWFooter";
import AILogo from "../Icons/AdobeIlustrator.jpg";
import AXDLogo from "../Icons/AdobeXD.png";
import BootStrapLogo from "../Icons/Bootstrap.png";
import CSharpLogo from "../Icons/Csharp.jpg";
import Css3Logo from "../Icons/Css3.png";
import HtmlLogo from "../Icons/HTML.jpg";
import JavaLogo from "../Icons/Java.jpg";
import JQueryLogo from "../Icons/Jquery.jpg";
import JsLogo from "../Icons/JS.png";
import PSLogo from "../Icons/photoshop.jpg";
import PythonLogo from "../Icons/Pythom.jpg";
import ReactLogo from "../Icons/React.jpg";
import SqlLogo from "../Icons/SQL.jpg";
import vueLogo from "../Icons/vue.jpg";

function AboutMe() {
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
        disableGutters
        maxWidth={false}
        sx={{ mx: "0", width: "100%", background: "grey" }}
      >
        <Box>
          <Typography
            sx={{
              width: "100vw",
              height: "20vh",
              display: "table-cell",
              textAlign: "center",
              verticalAlign: "middle",
            }}
          >
            Hi, I am Yuxiao. I'm a front end developer believed in simplicity
            and efficiency.
          </Typography>
        </Box>
      </Container>
      <Container
      // disableGutters
      // maxWidth={false}
      // sx={{ mx: "10%", maxWidth: "100%", width: "80vw" }}
      >
        <Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="stretch"
            spacing={3}
          >
            <Box>
              <Paper >
                <Avatar alt="htmllogo" src={HtmlLogo}></Avatar>
                <Typography>HTML</Typography>
              </Paper>
            </Box>
            <Box>
              <Paper>
                <Avatar alt="cssLogo" src={Css3Logo}></Avatar>
                <Typography>CSS3</Typography>
              </Paper>
            </Box>
            <Box>
              <Paper>
                <Avatar alt="jsLogo" src={JsLogo}></Avatar>
                <Typography>JavaScript</Typography>
              </Paper>
            </Box>
            <Box>
              <Paper>
                <Avatar alt="Java" src={JavaLogo}></Avatar>
                <Typography>Java</Typography>
              </Paper>
            </Box>
            <Box>
              <Paper>
                <Avatar alt="python" src={PythonLogo}></Avatar>
                <Typography>Python</Typography>
              </Paper>
            </Box>
            <Box>
              <Paper>
                <Avatar alt="c#" src={CSharpLogo}></Avatar>
                <Typography>C#</Typography>
              </Paper>
            </Box>
            <Box>
              <Paper>
                <Avatar alt="sql" src={SqlLogo}></Avatar>
                <Typography>SQL</Typography>
              </Paper>
            </Box>
            <Box>
              <Paper>
                <Avatar alt="vue" src={vueLogo}></Avatar>
                <Typography>Vue2/3</Typography>
              </Paper>
            </Box>
            <Box>
              <Paper>
                <Avatar alt="Jquery" src={JQueryLogo}></Avatar>
                <Typography>JQuery</Typography>
              </Paper>
            </Box>
            <Box>
              <Paper>
                <Avatar alt="React" src={ReactLogo}></Avatar>
                <Typography>React</Typography>
              </Paper>
            </Box>
            <Box>
              <Paper>
                <Avatar alt="bootstrap" src={BootStrapLogo}></Avatar>
                <Typography>BootStrap</Typography>
              </Paper>
            </Box>
            <Box>
              <Paper>
                <Avatar alt="photoshop" src={PSLogo}></Avatar>
                <Typography>PhotoShop</Typography>
              </Paper>
            </Box>
            <Box>
              <Paper>
                <Avatar alt="adobeillustrator" src={AILogo}></Avatar>
                <Typography>Adobe Illustrator</Typography>
              </Paper>
            </Box>
            <Box>
              <Paper>
                <Avatar alt="Adobe Xd" src={AXDLogo}></Avatar>
                <Typography>Adobe XD</Typography>
              </Paper>
            </Box>
          </Stack>
        </Box>
      </Container>
      <Container
        id="contactAnchor"
        maxWidth="false"
        disableGutters={true}
        sx={{ mt: "20vh", width: "100%", height: "20vh" }}
      >
        <Box sx={{ m: "5%" }}>
          <YWFooter></YWFooter>
        </Box>
      </Container>
    </>
  );
}

export default AboutMe;
