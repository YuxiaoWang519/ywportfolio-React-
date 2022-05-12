import React from "react";
import SideMenu from "../components/SideMenu";
import Box from "@mui/material/Box";
import HomeIntro from "./HomeIntro";
import { Container, CssBaseline, Toolbar } from "@mui/material";

function ElevationScroll(props) {
  const { children, window } = props;
  return React.cloneElement(children, { elavation: window ? 4 : 0 });
}

function HomeView(props) {
  return (
    <>
      <CssBaseline />
      <ElevationScroll {...props}>
        <SideMenu></SideMenu>
      </ElevationScroll>
      <Toolbar />
      <Container maxWidth="false" disableGutters={true} sx={{ width: "100%" }}>
        <Box> 
          <HomeIntro></HomeIntro>
        </Box>
      </Container>
      
    </>
  );
}

export default HomeView;
