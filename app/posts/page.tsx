import Heading, {HeadingProps} from "@/components/Heading"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Posts page',
  description: 'List of posts'
}

interface PostsProps {
  id: number;
  title: string;
  email: string;
}

const getStaticPaths = async () => {
  const staticData = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data: PostsProps[] = await staticData.json();

  return data
}

const Posts = async () => {
  const data = await getStaticPaths();

  const headingProps: HeadingProps = {
    text: "Posts list: "
  }
  
  return  (
    <>
      <Heading {...headingProps}/>
      <ul>
        {
          data && data.map(({id, title}) => (
            <li key={id}><Link href={`/posts/${id}`}>{title}</Link></li>
          ))
        }
      </ul>
    </>
  )
}

export default Posts;