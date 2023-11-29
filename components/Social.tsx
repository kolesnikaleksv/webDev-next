import { SocialInfo } from "@/app/page";
import Link from "next/link";

const Social = ({social}:{social: SocialInfo[]}) => {

  return (
    <>
      <ul className="flex m-0 p-5 list-none">
        {
          social.map(({id, icon, path}) => (
            <li key={id} className="mx-2 my-0">
              <Link href={path} target="_blank">
                <span className="material-symbols-outlined">
                  {icon}
                </span>
              </Link>
            </li>
          ))
        }
      </ul>
    </>
  )
}

export default Social;