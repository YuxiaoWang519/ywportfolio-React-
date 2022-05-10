import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import "../styles/SideMenu.css";
import Drawer from "@mui/material/Drawer";
import SpeedDial from "@mui/material/SpeedDial";

function SideMenu() {
  const [nav, setNav] = React.useState(false);
  function toggleNav() {
    setNav(() => !nav);
    console.log(nav);
  }
  return (
    <div className="NavFBtn">
      <Fab onClick={toggleNav} variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate<ArrowForwardIosIcon></ArrowForwardIosIcon>
      </Fab>

      {/* use drawer to show nav */}
      {/* <Drawer anchor="left" open={nav} onClose={toggleNav}>
        <div>this is Drawer</div>
      </Drawer> */}
      {/* use speeddial to show nav */}
    </div>
  );
}

export default SideMenu;
