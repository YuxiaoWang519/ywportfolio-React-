import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SideMenu from "../components/SideMenu";
import { Toolbar } from "@mui/material";
import YWFooter from "./YWFooter";

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
        sx={{ mx: "0", width: "100vw", background: "grey" }}
      >
        <Box >
          <Typography>
            Hi, I am Yuxiao. I'm a front end developer believed in simplicity
            and efficiency.
          </Typography>
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
