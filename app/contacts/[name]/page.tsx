import Heading, {HeadingProps} from "@/components/Heading";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: 'Contact page',
  description: 'Page for a contact'
}

interface PageParams{
  params: {name: string};
}

const Contact: FC<PageParams> = ({params}) => {

  const headingProps: HeadingProps = {
    text: 'Contact page'
  }
  return (
    <>
      <Heading {...headingProps} />
      <div>hello: {params.name}</div>
    </>
  )
}

export default Contact;