import { Box, Text } from "theme-ui";
import Link from "next/link";

const Footer = (props) => (
  <Box
    as="footer"
    sx={{
      color: "#666",
      textAlign: "center",
      fontSize: 0,
      mt: 4,
    }}
  >
    <Text sx={{ mx: 3, display: "inline-block" }}>© 2020</Text>
    <Text sx={{ mx: 3, display: "inline-block" }}>
      <Link href="/">/home</Link>
    </Text>
    <Text sx={{ mx: 3, display: "inline-block" }}>
      <Link href="/photo">/photo</Link>
    </Text>
    <Text sx={{ mx: 3, display: "inline-block" }}>
      <Link href="/about">/about</Link>
    </Text>
  </Box>
);

export default Footer;
