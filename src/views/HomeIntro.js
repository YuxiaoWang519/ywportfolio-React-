import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../styles/SideMenu.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import BG01Grey from "../SliderImg/BG01Grey.jpg";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { hover } from "@testing-library/user-event/dist/hover";

function HomeIntro() {
  const btnEffect = {
    color: "yellow",
    ":hover": {
      color: "red",
    },
  };

  let navigate = useNavigate();
  const toProjects = () => {
    navigate("/Projects");
  };
  const toAboutMe = () => {
    navigate("/AboutMe");
  };
  return (
    //   <Paper elevation={9} sx={{ background: "grey" }}>
    //     2121
    //   </Paper>
    // );

    <Paper
      elevation={12}
      sx={{ px: 0, height: "80vh", width: "100%" }}
      className="introBg"
      // style={{
      //   background:
      //     " linear-gradient(293deg, rgb(255, 253, 253) 0%, rgb(199, 199, 201) 100%)",
      // }}

      style={{
        backgroundImage: `url(${BG01Grey})`,
        backgroundSize: "cover",
        opacity: "80%",
      }}
    >
      <Stack direction="row">
        <div>
          <Avatar
            alt="Yuxiao Wang"
            src=""
            sx={{
              zIndex: "2",
              position: "relative",
              left: "20vw",
              top: "10vh",
              width: "30vh",
              height: "30vh",
            }}
          ></Avatar>
        </div>

        <div className="introD">
          <h1>Yuxiao Wang</h1>
          <h2>Front-End developer</h2>
          <Button
            onClick={toAboutMe}
            sx={{
              alignSelf: "center",
              background: "grey",
              color: " #bfdfff ",
            }}
            variant="contained"
            color="success"
          >
            Learn More
          </Button>
          {/* <button className="introBtn">Learn More</button> */}
        </div>
      </Stack>
      <Box sx={{ mx: "20%" }}>
        <Typography sx={{ color: " #025474", fontSize: "20px" }}>
          I'm enthusiastic about front end development in general. I believe in
          simplicity and efficiency. Here are some of my works and some are
          still in development.This site is built with React and Mui. I will
          keep updating this site. If you are interested in me or my work,
          please don't hesitate to contact me.
          {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Iaculis
          urna id volutpat lacus laoreet non curabitur. Aliquam id diam maecenas
          ultricies mi eget mauris pharetra et. Pulvinar sapien et ligula
          ullamcorper. Vivamus at augue eget arcu dictum varius duis. Mauris
          commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Lorem
          ipsum dolor sit amet consectetur adipiscing elit duis tristique.
          Porttitor massa id neque aliquam vestibulum morbi blandit. Malesuada
          bibendum arcu vitae elementum curabitur vitae nunc sed velit.
          Facilisis leo vel fringilla est ullamcorper. Sem et tortor consequat
          id. Nisl nisi scelerisque eu ultrices. Porta nibh venenatis cras sed
          felis eget. */}
        </Typography>
      </Box>
    </Paper>
  );
}

export default HomeIntro;
