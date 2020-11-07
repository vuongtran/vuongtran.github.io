import Wrapper from "../src/layout/Wrapper";
import Photo from "../src/views/Photo";
import config from "../blog.config.js";

const PhotoPage = () => (
  <Wrapper
    url="/photo"
    title={config.title + " | Photo"}
    description={"Photo be me"}
    imageUrl={config.shareImage}
    imageAlt={config.shareImageAlt}
  >
    <Photo />
  </Wrapper>
);

export default PhotoPage;
