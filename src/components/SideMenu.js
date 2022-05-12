import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import "../styles/SideMenu.css";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import SpeedDial from "@mui/material/SpeedDial";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import { Divider, Paper } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import ContactPageIcon from "@mui/icons-material/ContactPage";
function SideMenu() {
  const [nav, setNav] = React.useState(false);

  const navlist = () => (
    <Box sx={{ backgroundColor: "" }}>
      <List>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon></HomeIcon>
            </ListItemIcon>
            <ListItemText primary="Home"></ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider></Divider>
        <ListItem>
          <ListItemButton>
            <ListItemIcon>
              <PlayCircleIcon></PlayCircleIcon>
            </ListItemIcon>
            <ListItemText primary="Projects"></ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider></Divider>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <ContactPageIcon></ContactPageIcon>
          </ListItemIcon>
          <ListItemText primary="Contact"></ListItemText>
        </ListItemButton>
      </ListItem>
    </Box>
  );

  function toggleNav() {
    setNav(() => !nav);
    console.log(nav);
  }

  return (
    <>
      <div className="navs">
        <AppBar color="transparent">
          <Toolbar variant="dense">
            {/* <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }} */}
            {/* > */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Welcome
            </Typography>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleNav}
            >
              <MenuIcon />
            </IconButton>
            {/* </Box> */}
          </Toolbar>
        </AppBar>
        {/* <Fab onClick={toggleNav} color="primary" variant="extended">
        <NavigationIcon sx={{ mr: 1 }} />
        Navigate<ArrowForwardIosIcon></ArrowForwardIosIcon>
      </Fab> */}

        {/* use drawer to show nav */}

        <Drawer
          sx={{
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              background:
                "linear-gradient(90deg, rgb(250, 249, 249) 0%, rgb(231, 230, 233) 97%);",
              elevation: "24",
            },
          }}
          variant="temporary"
          anchor="right"
          open={nav}
          onClose={toggleNav}
        >
          {/* <Paper className="navPaper" elevation={24}></Paper> */}
          {navlist()}
        </Drawer>
        {/* use speeddial to show nav */}
      </div>
    </>
  );
}

export default SideMenu;
