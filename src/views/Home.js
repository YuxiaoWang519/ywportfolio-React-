import React from "react";
import SideMenu from "../components/SideMenu";
import Box from "@mui/material/Box";
import HomeIntro from "./HomeIntro";
import { Container, CssBaseline, Toolbar } from "@mui/material";
import CardShows from "../components/CardShows";
import CardWhatsApp from "./projects/CardWhtsApp";

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
      <Container>
        {/* need to change to a list, imagelist,tab, or something with slide animation,
        currently this is just a splaceholder */}
        <Box
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-evenly",
            alignContent: "flex-start",
          }}
        >
          <CardWhatsApp></CardWhatsApp>
          <CardWhatsApp></CardWhatsApp>
          <CardWhatsApp></CardWhatsApp>
          <CardWhatsApp></CardWhatsApp>
          <CardWhatsApp></CardWhatsApp>
        </Box>
      </Container>
    </>
  );
}

export default HomeView;
