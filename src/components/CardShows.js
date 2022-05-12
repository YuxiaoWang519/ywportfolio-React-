import { ImportExport } from "@mui/icons-material";
import { Card } from "@mui/material";
import { number } from "prop-types";
import React from "react";
import CardWhatsApp from "../views/projects/CardWhtsApp";
import { Box } from "@mui/system";
function CardShows() {
  // maybe use imagelist? or something with same style
  const cardsDeck = [CardWhatsApp, CardWhatsApp];
  // const CardShows = cardsDeck.map((card, index) => (
  //   <div key={index}>{card}</div>
  // ));
  return <Box>{cardsDeck.map((card, index) => card)}</Box>;
}

export default CardShows;
