import { Text } from "theme-ui";

const DraftBadge = (props) => (
  <Text
    as="span"
    sx={{
      bg: "red",
      color: "white",
      fontWeight: 400,
      fontSize: 0,
      py: 1,
      px: 2,
      position: "absolute",
      top: "-3px",
      left: "-60px",
      borderRadius: "8px",
    }}
  >
    draft
  </Text>
);

export default DraftBadge;
