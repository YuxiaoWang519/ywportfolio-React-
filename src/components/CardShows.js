import { ImportExport } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { number } from "prop-types";
import React from "react";

//how to customize?
import StepConnector from "@mui/material/StepConnector";

import { Box } from "@mui/system";
import MobileStepper from "@mui/material/MobileStepper";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Story from "../Images/Story.png";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
import Chat01 from "../Images/Chat01.png";
import { useNavigate } from "react-router";
import SliderWhatsApp from "../SliderImg/SliderWhatsApp.png";
import LoginSquare from "../Nangang/loginSquare.png"
import HomeSquare from "../WechatMIni/Home01Square.jpg"
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const cardsDeck = [
  {
    label: "WhatsApp Redesign Project",
    src: SliderWhatsApp,
    alt: "Story",
    text: "WhatsApp redesign project aimed to improve its user experience, madeutility changes and new functions.",
    
  },
  {
    label: "NanGang Inventory Managing App",
    src: LoginSquare,
    alt: "Story",
    text: "NanGang Inventory Managing App helped medical worker from logistical nightmares",
  },
  {
    label: "WeChat mini project for University Anniversary",
    src: HomeSquare,
    alt: "Story",
    text: "A mini project for the university annivarsary",
  }
];

function CardShows() {
  const navigate = useNavigate();
  const toProject = () => {
    navigate("/Projects");
  };
  const toWhatsApp=()=>{
    navigate("/Projects/WhatsApp");
  }



  console.log(Story);
  // maybe use imagelist? or something with same style
  // const cardsDeck = [CardWhatsApp, CardWhatsApp];
  // const CardShows = cardsDeck.map((card, index) => (
  //   <div key={index}>{card}</div>
  // ));
  const theme = useTheme();
  const [activeStep, setAvtiveStep] = React.useState(0);
  const maxSteps = cardsDeck.length;
  const handleNext = () => {
    setAvtiveStep((prev) => prev + 1);
  };
  const hanldePrev = () => {
    setAvtiveStep((prev) => prev - 1);
  };
  const handleStep = (step) => {
    setAvtiveStep(step);
  };
  return (
    <>
      <Box sx={{ maxWidth: "70vw",flexGrow: 1, height:"max-content",  }}>
        <AutoPlaySwipeableViews
        sx={{ height:"max-content" }}
          interval={5000}
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStep}
          enableMouseEvents
          
        >
          
          {cardsDeck.map((card, index) => (
            <div key={index}>
              <Card
                
                onClick={toProject}
                
                sx={{ maxWidth: "100%", background: "#ffffff", height:"70vh" }}
              >
                <CardActionArea>
                  <CardMedia 
                    
                    sx={{ maxWidth: "100%" ,maxHeight:"60vh"}}
                    component="img"
                    height=""
                    image={card.src}
                    alt={card.alt}
                  />
                  <CardContent>
                    
                    <Typography gutterBottom variant="h5" component="div">
                      {card.label}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {card.text}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </AutoPlaySwipeableViews>
        {/* <MobileStepper
          sx={{ opacity: "40%", width: "100vw  " }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={hanldePrev}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        ></MobileStepper> */}
      </Box>
      <MobileStepper
        variant="dots"
        sx={{
          
          bgcolor: "black",
          opacity: "80%",
          width: "90vw  ",
          "& .MuiMobileStepper-dotActive": {
            bgcolor: "bisque !important",
          },
          "	.MuiMobileStepper-dot" :{
            bgcolor:"green"
          }
        }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{ color: "bisque", pr: "2vw" }}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={hanldePrev}
            disabled={activeStep === 0}
            sx={{ color: "bisque", pl: "2vw" }}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      ></MobileStepper>
    </>
  );
}

export default CardShows;
