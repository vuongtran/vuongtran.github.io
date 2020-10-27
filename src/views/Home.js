import { MDXProvider } from "@mdx-js/react"
import MarkdownContent from "../mdx/home.mdx"
import Container from "../ui/Container"

const Home = (props) => {
  return (
    <MDXProvider>
      <Container>
        <MarkdownContent />
      </Container>
    </MDXProvider>
  )
}

export default Home
