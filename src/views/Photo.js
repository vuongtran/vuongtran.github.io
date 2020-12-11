import Gallery from "react-grid-gallery";

const images = [
  {
    src: "/photo/1.jpg",
    thumbnail: "/photo/1.jpg",
    caption: "",
  },
  {
    src: "/photo/2.jpg",
    thumbnail: "/photo/2.jpg",
    caption: "",
  },
  {
    src: "/photo/3.jpg",
    thumbnail: "/photo/3.jpg",
    caption: "",
  },
  {
    src: "/photo/4.jpg",
    thumbnail: "/photo/4.jpg",
    caption: "",
  },
  {
    src: "/photo/5.jpg",
    thumbnail: "/photo/5.jpg",
    caption: "",
  },
  {
    src: "/photo/6.jpg",
    thumbnail: "/photo/6.jpg",
    caption: "",
  },
  {
    src: "/photo/7.jpg",
    thumbnail: "/photo/7.jpg",
    caption: "",
  },
];

function Photo() {
  return (
    <>
      <h3>Photo</h3>
      <Gallery images={images} />
    </>
  );
}

export default Photo;
