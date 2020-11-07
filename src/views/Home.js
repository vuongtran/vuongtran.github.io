import { MDXProvider } from "@mdx-js/react";
import BioMarkdownContent from "../mdx/home.mdx";
import Emoji from "../ui/Emoji";

const Home = (props) => {
  return (
    <MDXProvider>
      <div>
        <Emoji symbol="👨‍💻🔥🎉" />
      </div>
      <BioMarkdownContent />
      <h4>
        <Emoji symbol="⌨️" /> Writting
      </h4>
      {/* <h3>
          <Emoji symbol="📖" /> Bookmark
        </h3>
        <h3>
          <Emoji symbol="🏃‍♂️" /> Running
        </h3> */}
    </MDXProvider>
  );
};

export default Home;
