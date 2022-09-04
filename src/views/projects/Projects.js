import React from "react";
import SideMenu from "../../components/SideMenu";
import { Toolbar } from "@mui/material";
import { Box, margin, maxWidth } from "@mui/system";
import { Container } from "@mui/material";
import YWFooter from "../YWFooter";
import { Grid } from "@mui/material";
import { Paper } from "@mui/material";
import Story from "../../Images/Story.png";
import Chat01 from "../../Images/Chat01.png";
import "../../styles/Projects.css";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router";
import { WhatsApp } from "@mui/icons-material";
import WelcomePage from "../../Images/WelcomePage.png";
function Projects() {
  // let navigate = useNavigate();
  // const toDetails = (e) => {
  //   console.log(e);
  //   const identifier = e.target.id;
  //   switch (identifier) {
  //     case "whatsApp":
  //       navigate("/Projects/WhatsApp");
  //       break;

  //     default:
  //       break;
  //   }
  let navigate = useNavigate();
  const toWhatsApp = () => {
    navigate("/Projects/WhatsApp");
  };

  // };
  return (
    <>
      <Container maxWidth="false" disableGutters={true} sx={{ width: "100%" }}>
        <Box>
          {/* <ElevationScroll {...props}> */}
          <SideMenu></SideMenu>
          {/* </ElevationScroll> */}
        </Box>
      </Container>
      <Box sx={{ background: "grey", py: "10vh" }}>
        <div className="projectIntro">
          <h1>List of projects</h1>
          <p>feel free to check them out</p>
        </div>
        <Grid
          container
          justifyContent="space-evenly"
          // sx={{ mt: "30vh", height: "40vh" }}
        >
          <Grid item xs={3} className="gridC">
            {/* <Card sx={{ maxWidth: "30vw" }} className="cardAnimation">
            <CardMedia
              component="img"
              height="200px"
              image={Story}
              alt="p1_img"
            ></CardMedia>
            <CardContent sx={{ background: "grey" }}>
              <Typography gutterBottom variant="h5" component="div">
                WhatsApp Redesign Project
              </Typography>
              <Typography variant="body2" color="text.secondary">
                WhatsApp redesign proect aimed to improve its user experience.
                The project focused on the design aspect, making improvement in
                terms of new visual design and new potential functions.
              </Typography>
            </CardContent>
          </Card> */}

            <Box className="cardAnimation" onClick={toWhatsApp}>
              <div className="intro">
                <div className="introText">WhatsApp Redesign </div>
              </div>

              <img id="whatsApp" src={WelcomePage} className="imgFits"></img>
            </Box>
          </Grid>
          <Grid item xs={3} className="gridC">
            <Box className="cardAnimation">
              <div className="intro">
                <div className="introText">WhatsApp Redesign </div>
              </div>

              <img src={Story} className="imgFits"></img>
            </Box>
          </Grid>
        </Grid>
      </Box>
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

export default Projects;
