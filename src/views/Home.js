import React from "react";
import SideMenu from "../components/SideMenu";
import Box from "@mui/material/Box";
import HomeIntro from "./HomeIntro";
import {Helmet} from "react-helmet"
import {
  Avatar,
  Container,
  CssBaseline,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import CardShows from "../components/CardShows";
import CardWhatsApp from "./projects/CardWhtsApp";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import "../styles/Home.css";
import YWFooter from "./YWFooter";
// function ElevationScroll(props) {
//   const { children, window } = props;
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//   });
//   return React.cloneElement(children, { elavation: trigger ? 4 : 0 });
// }

function HomeView(props) {
  return (
    <>
      <div>
      <Helmet>
        <style>{"body { background: black;  }"}</style>
      </Helmet>
      
    </div>
      <CssBaseline />

      <Container maxWidth="false" disableGutters={true} sx={{ width: "100%" }}>
        <Box>
          {/* <ElevationScroll {...props}> */}
          <SideMenu></SideMenu>
          {/* </ElevationScroll> */}

          <HomeIntro></HomeIntro>
        </Box>
      </Container>

      <Container maxWidth="false" disableGutters={true} sx={{ width: "100%" }}>
        <Box
          className="slideShow"
          sx={{
            width: "90%",
            display: "flex",
            ml:"5%",
            flexFlow: "row wrap",
            justifyContent: "space-evenly",
            alignContent: "flex-start",
            background:
              "linear-gradient(0deg, rgb(184, 184, 187) 0%, rgb(248, 248, 250) 100%)",
          }}
        >
          <CardShows></CardShows>
        </Box>
      </Container>
      <Container
        id="contactAnchor"
        maxWidth="false"
        disableGutters={true}
        sx={{ maxWidth: "90vw", background: "black" }}
      >
        <Box sx={{ pt: "5%" }}>
          <YWFooter></YWFooter>
        </Box>
      </Container>
    </>
  );
}

export default HomeView;
