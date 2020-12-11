import Wrapper from "../src/layout/Wrapper";
import Home from "../src/views/Home";
import config from "../blog.config.js";

const HomePage = () => (
  <Wrapper
    url="/"
    title={config.title + " | Home"}
    description={"Learn more about " + config.title}
    imageUrl={config.shareImage}
    imageAlt={config.shareImageAlt}
  >
    <Home />
  </Wrapper>
);

export default HomePage;
