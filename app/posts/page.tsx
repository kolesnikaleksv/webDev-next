import Heading, {HeadingProps} from "@/components/Heading";

const Posts = () => {
  const headingProps: HeadingProps = {
    text: "Posts page"
  }
  return  <Heading {...headingProps}/>
}

export default Posts;