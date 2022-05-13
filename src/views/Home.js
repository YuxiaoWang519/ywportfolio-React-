import React from "react";
import SideMenu from "../components/SideMenu";
import Box from "@mui/material/Box";
import HomeIntro from "./HomeIntro";
import { Container, CssBaseline, Toolbar, Typography } from "@mui/material";
import CardShows from "../components/CardShows";
import CardWhatsApp from "./projects/CardWhtsApp";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import "../styles/Home.css";
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
      <CssBaseline />

      <Container maxWidth="false" disableGutters={true} sx={{ width: "100%" }}>
        <Box>
          {/* <ElevationScroll {...props}> */}
          <SideMenu></SideMenu>
          {/* </ElevationScroll> */}
          <Toolbar disableGutters={true} />
          <HomeIntro></HomeIntro>
        </Box>
      </Container>
      <Container maxWidth="false" disableGutters={true} sx={{ width: "100%" }}>
        <Box
          className="slideShow"
          sx={{
            width: "100%",
            display: "flex",
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
      <Container>
        <Box>
          <Typography>
            <h3>footer area</h3>
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default HomeView;
