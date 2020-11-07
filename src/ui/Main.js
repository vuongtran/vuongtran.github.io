import { Box } from "theme-ui";
import Container from "./Container";

const Main = (props) => {
  return (
    <Box
      as="main"
      sx={{
        display: "flex",
        flex: 1,
        flexDirection: "column",
        // px: [3, 4],
        // pb: 4,
        // alignItems: "center",
        // borderBottom: "solid 1px",
        // borderTop: "solid 1px",
        borderColor: "lite",
      }}
      {...props}
    ></Box>
  );
};

export default Main;
