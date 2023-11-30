import { postType } from "@/type";
import {FC} from 'react'

const PostInfo:FC<postType>  = (props) => {
  const { title, body} = props || {};
  
  return (
    <>
      <div>
      <h1>{title}</h1>
      <h3>{body}</h3>
      </div>
    </>
  )
}

export default PostInfo;