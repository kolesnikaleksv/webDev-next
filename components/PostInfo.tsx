import { PostProps } from "@/app/posts/[id]/page";

const PostInfo = (props: PostProps) => {
  const {id, title, body} = props;
  
  return (
    <>
      <div>
      <h1>{id}</h1>
      <h3>{title}</h3>
      <p>{body}</p>
      </div>
    </>
  )
}

export default PostInfo;