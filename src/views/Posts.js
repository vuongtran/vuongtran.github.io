// import MDX from "@mdx-js/runtime";
import { Flex, Box, Heading, Text } from "theme-ui";
import DraftBadge from "../ui/DraftBadge";
import Link from "next/link";
import Emoji from "../ui/Emoji";

const Posts = ({ posts, prevPosts, nextPosts }) => {
  const isLocal = process.env.NODE_ENV === "development";

  return (
    <>
      <Heading as="h1" sx={{ pb: 2, position: "relative" }}>
        All posts
        <p>
          <Emoji symbol="👨‍💻🔥🎉" />
        </p>
      </Heading>
      {posts &&
        posts
          .filter((post) => {
            return isLocal || !post.draft;
          })
          .map((post) => (
            <Box sx={{ pb: 2 }} key={post.slug}>
              <Heading as="h3" sx={{ pb: 2, position: "relative" }}>
                <Link href={"/" + post.slug} passHref>
                  <Text sx={{ cursor: "pointer" }}>{post.title}</Text>
                </Link>
                {post.draft && <DraftBadge />}
              </Heading>
              <Box sx={{ pb: 2 }}>
                <Text sx={{ fontStyle: "italic", fontSize: 0 }}>
                  {new Date(post.date).toLocaleDateString()}
                </Text>
              </Box>
              {/* <Link href={"/" + post.slug} passHref>
                <a>Read more...</a>
              </Link> */}
            </Box>
          ))}
      <Flex sx={{ fontStyle: "italic" }}>
        <Box sx={{ width: "50%", py: 3, textAlign: "left" }}>
          {prevPosts !== null && (
            <Link href={"/blog/" + prevPosts} passHref>
              <a>« See newer posts</a>
            </Link>
          )}
        </Box>
        <Box sx={{ width: "50%", py: 3, pr: 3, textAlign: "right" }}>
          {nextPosts !== null && (
            <Link href={"/blog/" + nextPosts} passHref>
              <a>See older posts »</a>
            </Link>
          )}
        </Box>
      </Flex>
    </>
  );
};

export default Posts;
