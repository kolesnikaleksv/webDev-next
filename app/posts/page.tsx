import Heading, {HeadingProps} from "@/components/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Posts page',
  description: 'List of fosts'
}

const Posts = () => {
  const headingProps: HeadingProps = {
    text: "Posts page"
  }
  return  <Heading {...headingProps}/>
}

export default Posts;