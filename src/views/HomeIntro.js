import { Button, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../styles/SideMenu.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import {
  BrowserRouter,
  Link,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

function HomeIntro() {
  let navigate = useNavigate();
  const toProjects = () => {
    navigate("/Projects");
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
      style={{
        background:
          " linear-gradient(293deg, rgb(255, 253, 253) 0%, rgb(199, 199, 201) 100%)",
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
          <h2>Yuxiao Wang</h2>
          <h3>Front-End developer</h3>
          <Button
            onClick={toProjects}
            sx={{ alignSelf: "center" }}
            variant="contained"
          >
            See my projects!
          </Button>
        </div>
      </Stack>
      <Box sx={{ mx: "10%" }}>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
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
          felis eget.
        </Typography>
      </Box>
    </Paper>
  );
}

export default HomeIntro;
