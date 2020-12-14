import React from "react";
import Gallery from "react-photo-gallery";
import { Heading } from "theme-ui";

const images = [
  {
    src: "/photo/1.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/photo/2.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/photo/3.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/photo/4.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/photo/5.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/photo/6.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/photo/7.jpg",
    width: 4,
    height: 3,
  },
  {
    src: "/photo/8.jpg",
    width: 3,
    height: 4,
  },
];

function Photo() {
  const openLightbox = (event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  return (
    <>
      <Heading as="h1" sx={{ pb: 2, position: "relative" }}>
        Photos
      </Heading>
      <Gallery photos={images} />
    </>
  );
}

export default Photo;
