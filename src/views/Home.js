import React from "react";
import SideMenu from "../components/SideMenu";
import Box from "@mui/material/Box";
import HomeIntro from "./HomeIntro";
import { CssBaseline } from "@mui/material";
function HomeView() {
  return (
    <Box>
      <CssBaseline />
      <SideMenu></SideMenu>
      <HomeIntro></HomeIntro>
    </Box>
  );
}

export default HomeView;
