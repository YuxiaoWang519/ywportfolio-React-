import { Container, Box, DialogContent, DialogTitle } from "@mui/material";
import React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "../styles/PhotoWall.css";
import { Dialog } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { teal } from "@mui/material/colors";
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

function PhotoWall() {
  const [pOpen, setpOpen] = React.useState(false);
  const [fullPWidth, setFullPWidth] = React.useState(true);
  const [maxPWidth, setMaxPWidth] = React.useState("lg");
  const [imgSrc, setImgSrc] = React.useState(null);
  const handlePOpen = (selected) => {
    setImgSrc(selected);
    setpOpen(true);
  };
  const handlePClose = () => {
    setpOpen(false);
  };

  const NanGanfGallery = importAll(
    require.context("../Nangang", false, /\.(png|jpe?g|svg)$/)
  );
  console.log(NanGanfGallery);
  let WAGallery = [];
  for (const key in NanGanfGallery) {
    WAGallery.push(NanGanfGallery[key]);
  }
  console.log(WAGallery);
  return (
    <>
      <ImageList
        sx={{ background: "grey" }}
        variant="masonry"
        cols={4}
        gap={20}
      >
        {WAGallery.map((item) => (
          <ImageListItem key={item} className="imgList">
            <img
              onClick={() => handlePOpen(item)}
              src={`${item}?fit=crop&auto=format`}
              srcSet={`${item}?fit=crop&auto=format&dpr=2 2x`}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Dialog
        fullScreen={true}
        fullWidth={fullPWidth}
        maxWidth={maxPWidth}
        open={pOpen}
        onClose={handlePClose}
      >
        <DialogTitle>
          Deatail
          <IconButton
            color="primary"
            aria-label="close"
            onClick={handlePClose}
            sx={{
              position: "absolute",
              right: 20,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent   >
          <img className="dialogFitLarge" src={imgSrc}></img>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default PhotoWall;
