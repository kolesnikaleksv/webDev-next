import Heading, {HeadingProps} from "@/components/Heading"
import PostInfo from "@/components/PostInfo";
import {FC} from 'react'

export interface PostProps{
  id: number;
  title: string;
  body: string;
}

const getPostInfo = async (id: number) => {
  const staticData = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { next: {revalidate: 3600} });
  const data: PostProps = await staticData.json();

  return data
}


const Post = async (context: any) => {
  const {id} = context.params;
  const postInfo = await getPostInfo(id);
  
  const headingProps: HeadingProps = {
    text: 'Post page: '
  }

  return (
    <>
      <Heading {...headingProps} />
      <PostInfo {...postInfo}/>
    </>
  )
}

export default Post;