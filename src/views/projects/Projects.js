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

function Projects() {
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
      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ mt: "30vh", height: "40vh" }}
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

          <Box className="cardAnimation">
            <div className="intro">
              <div className="introText">WhatsApp Redesign </div>
            </div>

            <img src={Story} className="imgFit"></img>
          </Box>
        </Grid>
        <Grid item xs={3} className="gridC">
          <Box className="cardAnimation">
            <div className="intro">
              <div className="introText">WhatsApp Redesign </div>
            </div>

            <img src={Story} className="imgFit"></img>
          </Box>
        </Grid>
      </Grid>
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
