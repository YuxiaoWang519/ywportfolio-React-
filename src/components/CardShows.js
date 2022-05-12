import { ImportExport } from "@mui/icons-material";
import { number } from "prop-types";
import React from "react";
import CardWhatsApp from "../views/projects/CardWhtsApp";
function CardShows() {
  const cardsDeck = [CardWhatsApp];
  const CardShows = cardsDeck.map((card, index) => <li key={index}>{card}</li>);
  return <ul>{CardShows}</ul>;
}

export default CardShows;
