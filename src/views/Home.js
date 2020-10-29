import { MDXProvider } from "@mdx-js/react";
import BioMarkdownContent from "../mdx/home.mdx";
import Container from "../ui/Container";
import Emoji from "../ui/Emoji";
const Home = (props) => {
  return (
    <MDXProvider>
      <Container>
        <div>
          <Emoji symbol="👨‍💻🔥🎉" />
        </div>
        <BioMarkdownContent />
        <h3>
          <Emoji symbol="⌨️" /> Writting
        </h3>
        <h3>
          <Emoji symbol="📖" /> Bookmark
        </h3>
        <h3>
          <Emoji symbol="🏃‍♂️" /> Running
        </h3>
      </Container>
    </MDXProvider>
  );
};

export default Home;
