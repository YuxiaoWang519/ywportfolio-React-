import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Story from "../../Images/Story.png";
function CardWhatsApp() {
  return (
    <Card sx={{ maxWidth: "30vw", background: "grey" }}>
      <CardActionArea>
        <CardMedia
          sx={{ maxWidth: "100%" }}
          component="img"
          height="300"
          image={Story}
          alt="Create Group"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            WhatsApp Redesign Project
          </Typography>
          <Typography variant="body2" color="text.secondary">
            WhatsApp redesign project aimed to improve its user experience, made
            utility changes and new functions.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardWhatsApp;
