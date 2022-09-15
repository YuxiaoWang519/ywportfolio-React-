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
import Chip from "@mui/material/Chip";
import { Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
import copy from "copy-to-clipboard";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router";

function SideMenu() {
  let navigate = useNavigate();
  const toHome = () => {
    navigate("/Home");
  };
  const toProjects = () => {
    navigate("/Projects");
  };
  const toAbout = () => {
    navigate("/AboutMe");
  };
  const [nav, setNav] = React.useState(false);
  const [clipBoard, setBoard] = React.useState(false);
  const handleCopy = () => {
    // const el = document.createElement("textarea");
    // el.value = "wangyuxiao519@live.com";
    // document.body.appendChild(el);
    // el.select();
    // document.execCommand("copy");
    // document.body.removeChild(el);
    // console.log(el);
    copy("wangyuxiao519@live.com");
    setBoard(true);
  };
  const handleClose = () => {
    setBoard(false);
  };
  const action = (
    <>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );

  const navlist = () => (
    <Box sx={{ backgroundColor: "" }}>
      <List>
        <ListItem>
          <ListItemButton onClick={toHome}>
            <ListItemIcon>
              <HomeIcon></HomeIcon>
            </ListItemIcon>
            <ListItemText primary="Home"></ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider variant="inset"></Divider>
        <ListItem>
          <ListItemButton onClick={toProjects}>
            <ListItemIcon>
              <PlayCircleIcon></PlayCircleIcon>
            </ListItemIcon>
            <ListItemText primary="Projects"></ListItemText>
          </ListItemButton>
        </ListItem>

        <Divider variant="inset"></Divider>
        <ListItem>
          <ListItemButton onClick={toAbout}>
            <ListItemIcon>
              <ContactPageIcon></ContactPageIcon>
            </ListItemIcon>
            <ListItemText primary="AboutMe"></ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider variant="middle">
          <Chip
            label="Contact Info"
            component="a"
            href="#contactAnchor"
            onClick={toggleNav}
            clickable
          ></Chip>
        </Divider>
        <ListItem>
          <Tooltip title="Click to copy">
            <ListItemButton onClick={handleCopy}>
              <ListItemIcon>
                <EmailIcon></EmailIcon>
              </ListItemIcon>
              <ListItemText primary="Email"></ListItemText>
            </ListItemButton>
          </Tooltip>
        </ListItem>
      </List>
    </Box>
  );

  function toggleNav() {
    setNav(() => !nav);
    console.log(nav);
  }

  return (
    <>
      <div className="navs">
        {/* backdropFilter: "blur(50px)"  */}
        <AppBar color="" sx={{ height:"9vh", opacity: "85%" }}>
          <Toolbar
            sx={{ height: "9vh", backdropFilter: "blur(2px)" }}
            variant="dense"
          >
            {/* <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }} */}
            {/* > */}
            <Typography
              onClick={toHome}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, ml: "10%" }}
              className="welcome"
            >
              Welcome
            </Typography>

            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: "10% "}}
              onClick={toggleNav}
            >
              <MenuIcon />
            </IconButton>
            {/* </Box> */}
          </Toolbar>
        </AppBar>
        <Toolbar
          variant="dense"
          disableGutters={true}
          sx={{ height: "9vh", minHeight: "0px", filter: "blur(50px)" }}
        />
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
        <Snackbar
          open={clipBoard}
          autoHideDuration={3000}
          onClose={handleClose}
          message="Coppied to clipbord"
          action={action}
        />
      </div>
    </>
  );
}

export default SideMenu;
