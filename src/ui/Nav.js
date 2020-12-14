import { useRouter } from "next/router";
import { Box } from "theme-ui";
import NavLink from "./NavLink";

const Nav = (props) => {
  const router = useRouter();
  return (
    <Box
      as="nav"
      sx={{
        mb: 4,
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <NavLink href="/" active={router.pathname === "/"}>
        /home
      </NavLink>
      <NavLink
        href="/photo"
        active={
          router.pathname === "/photo" || router.pathname.includes("/photo")
        }
      >
        /photo
      </NavLink>
      <NavLink href="/about" active={router.pathname === "/about"}>
        /about
      </NavLink>
    </Box>
  );
};

export default Nav;
