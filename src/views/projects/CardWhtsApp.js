import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function CardWhatsApp() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="../../Images/Story.png"
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
