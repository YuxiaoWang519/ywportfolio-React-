import { Container, Box } from "@mui/material";
import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

//   const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

//   <img src={images['doggy.png']} />

function PhotoWall() {
  const WhatsAppGallery = importAll(
    require.context("../Images", false, /\.(png|jpe?g|svg)$/)
  );
  console.log(WhatsAppGallery);
  let WAGallery = [];
  for (const key in WhatsAppGallery) {
    WAGallery.push(WhatsAppGallery[key]);
  }
  console.log(WAGallery);
  return (
    <>
      <ImageList variant="masonry" cols={3} gap={8}></ImageList>
    </>
  );
}

export default PhotoWall;
