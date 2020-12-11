import { Box } from "theme-ui";

const Container = (props) => (
  <Box
    sx={{ maxWidth: "800px", minWidth: "640px", mx: "auto", p: [4] }}
    {...props}
  />
);

export default Container;
