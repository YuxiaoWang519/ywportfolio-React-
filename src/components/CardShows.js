import { ImportExport } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import { number } from "prop-types";
import React from "react";
import CardWhatsApp from "../views/projects/CardWhtsApp";
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
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const cardsDeck = [
  {
    label: "WhatsApp Redesign Project",
    src: Story,
    alt: "Story",
    text: "WhatsApp redesign project aimed to improve its user experience, madeutility changes and new functions.",
  },
  {
    label: "WhatsApp Redesign Project",
    src: Chat01,
    alt: "Story",
    text: "WhatsApp redesign project aimed to improve its user experience, madeutility changes and new functions.",
  },
];

function CardShows() {
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
    <Box sx={{ maxWidth: "30vw", flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        interval={5000}
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStep}
        enableMouseEvents
      >
        {cardsDeck.map((card, index) => (
          <div key={index}>
            <Card sx={{ maxWidth: "100%", background: "grey" }}>
              <CardActionArea>
                <CardMedia
                  sx={{ maxWidth: "100%" }}
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
      <MobileStepper
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
          <Button size="small" onClick={hanldePrev} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      ></MobileStepper>
    </Box>
  );
}

export default CardShows;
