import { Button, Paper } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "../styles/SideMenu.css";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

function HomeIntro() {
  return (
    //   <Paper elevation={9} sx={{ background: "grey" }}>
    //     2121
    //   </Paper>
    // );

    <Paper
      elevation={12}
      sx={{ px: 0, height: "50vh", width: "100%" }}
      className="introBg"
      style={{
        background:
          " linear-gradient(293deg, rgb(255, 253, 253) 0%, rgb(199, 199, 201) 100%)",
      }}
    >
      <div className="introD">
        <h2>Yuxiao Wang</h2>
        <h3>Front-End developer</h3>
        <Button sx={{ alignSelf: "center" }} variant="contained">
          Button here
        </Button>
      </div>
    </Paper>
  );
}

export default HomeIntro;
