import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import "../styles/SideMenu.css";
function SideMenu() {
  return (
    <div className="NavFBtn">
      <Fab variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate
      </Fab>
      <ArrowForwardIosIcon></ArrowForwardIosIcon>
    </div>
  );
}

export default SideMenu;
