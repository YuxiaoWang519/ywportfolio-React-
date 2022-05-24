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
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
      {/* <Container
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
              <Paper>
                <Avatar alt="htmllogo" src={HtmlLogo}></Avatar>
                <Typography sx={{ display: "inline" }}>HTML</Typography>
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
      </Container> */}
      <Container sx={{ mt: "5vh" }}>
        <Accordion sx={{ bgcolor: "#a7a9ac" }}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Skill Set</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Grid container spacing={1}>
              <Grid item xs={3}>
                <Paper elevation={12} sx={{ bgcolor: "#bcd9f5" }}>
                  <Box
                    sx={{
                      pt: "5vh",
                      textAlign: "center",
                      height: "15vh",

                      lineHeight: "20vh",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: "8vh",
                        height: "8vh",
                        margin: " 0 auto",
                      }}
                      alt="htmllogo"
                      src={HtmlLogo}
                    ></Avatar>
                    <Typography>HTML</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={12} sx={{ bgcolor: "#bcd9f5" }}>
                  <Box
                    sx={{
                      pt: "5vh",
                      textAlign: "center",
                      height: "15vh",

                      lineHeight: "20vh",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: "8vh",
                        height: "8vh",
                        margin: " 0 auto",
                      }}
                      alt="css"
                      src={Css3Logo}
                    ></Avatar>
                    <Typography>CSS</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={12} sx={{ bgcolor: "#bcd9f5" }}>
                  <Box
                    sx={{
                      pt: "5vh",
                      textAlign: "center",
                      height: "15vh",

                      lineHeight: "20vh",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: "8vh",
                        height: "8vh",
                        margin: " 0 auto",
                      }}
                      alt="js"
                      src={JsLogo}
                    ></Avatar>
                    <Typography>JavaScript</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={12} sx={{ bgcolor: "#bcd9f5" }}>
                  <Box
                    sx={{
                      pt: "5vh",
                      textAlign: "center",
                      height: "15vh",

                      lineHeight: "20vh",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: "8vh",
                        height: "8vh",
                        margin: " 0 auto",
                      }}
                      alt="java"
                      src={JavaLogo}
                    ></Avatar>
                    <Typography>Java</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={12} sx={{ bgcolor: "#bcd9f5" }}>
                  <Box
                    sx={{
                      pt: "5vh",
                      textAlign: "center",
                      height: "15vh",

                      lineHeight: "20vh",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: "8vh",
                        height: "8vh",
                        margin: " 0 auto",
                      }}
                      alt="python"
                      src={PythonLogo}
                    ></Avatar>
                    <Typography>Python</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={12} sx={{ bgcolor: "#bcd9f5" }}>
                  <Box
                    sx={{
                      pt: "5vh",
                      textAlign: "center",
                      height: "15vh",

                      lineHeight: "20vh",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: "8vh",
                        height: "8vh",
                        margin: " 0 auto",
                      }}
                      alt="C#"
                      src={CSharpLogo}
                    ></Avatar>
                    <Typography>C#</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={12} sx={{ bgcolor: "#bcd9f5" }}>
                  <Box
                    sx={{
                      pt: "5vh",
                      textAlign: "center",
                      height: "15vh",

                      lineHeight: "20vh",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: "8vh",
                        height: "8vh",
                        margin: " 0 auto",
                      }}
                      alt="SQL"
                      src={SqlLogo}
                    ></Avatar>
                    <Typography>SQL</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={12} sx={{ bgcolor: "#bcd9f5" }}>
                  <Box
                    sx={{
                      pt: "5vh",
                      textAlign: "center",
                      height: "15vh",

                      lineHeight: "20vh",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: "8vh",
                        height: "8vh",
                        margin: " 0 auto",
                      }}
                      alt="VUE"
                      src={vueLogo}
                    ></Avatar>
                    <Typography>VUE2/VUE3</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={12} sx={{ bgcolor: "#bcd9f5" }}>
                  <Box
                    sx={{
                      pt: "5vh",
                      textAlign: "center",
                      height: "15vh",

                      lineHeight: "20vh",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: "8vh",
                        height: "8vh",
                        margin: " 0 auto",
                      }}
                      alt="JQUery"
                      src={JQueryLogo}
                    ></Avatar>
                    <Typography>JQuery</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={12} sx={{ bgcolor: "#bcd9f5" }}>
                  <Box
                    sx={{
                      pt: "5vh",
                      textAlign: "center",
                      height: "15vh",

                      lineHeight: "20vh",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: "8vh",
                        height: "8vh",
                        margin: " 0 auto",
                      }}
                      alt="React"
                      src={ReactLogo}
                    ></Avatar>
                    <Typography>React</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={12} sx={{ bgcolor: "#bcd9f5" }}>
                  <Box
                    sx={{
                      pt: "5vh",
                      textAlign: "center",
                      height: "15vh",

                      lineHeight: "20vh",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: "8vh",
                        height: "8vh",
                        margin: " 0 auto",
                      }}
                      alt="BootStrap"
                      src={BootStrapLogo}
                    ></Avatar>
                    <Typography>BootStrap</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={12} sx={{ bgcolor: "#bcd9f5" }}>
                  <Box
                    sx={{
                      pt: "5vh",
                      textAlign: "center",
                      height: "15vh",

                      lineHeight: "20vh",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: "8vh",
                        height: "8vh",
                        margin: " 0 auto",
                      }}
                      alt="PS"
                      src={PSLogo}
                    ></Avatar>
                    <Typography>PhotoShop</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={12} sx={{ bgcolor: "#bcd9f5" }}>
                  <Box
                    sx={{
                      pt: "5vh",
                      textAlign: "center",
                      height: "15vh",

                      lineHeight: "20vh",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: "8vh",
                        height: "8vh",
                        margin: " 0 auto",
                      }}
                      alt="AI"
                      src={AILogo}
                    ></Avatar>
                    <Typography>Adobe Ilustrator</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper elevation={12} sx={{ bgcolor: "#bcd9f5" }}>
                  <Box
                    sx={{
                      pt: "5vh",
                      textAlign: "center",
                      height: "15vh",

                      lineHeight: "20vh",
                    }}
                  >
                    <Avatar
                      sx={{
                        width: "8vh",
                        height: "8vh",
                        margin: " 0 auto",
                      }}
                      alt="Adobe XD"
                      src={AXDLogo}
                    ></Avatar>
                    <Typography>Adobe XD</Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </AccordionDetails>
        </Accordion>
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
