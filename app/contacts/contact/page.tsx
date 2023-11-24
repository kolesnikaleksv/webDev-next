import Heading, {HeadingProps} from "@/components/Heading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Contact page',
  description: 'Page for a contact'
}

const Contact = () => {
  const headingProps: HeadingProps = {
    text: 'Contact page'
  }
  return (
    <>
      <Heading {...headingProps} />
    </>
  )
}

export default Contact;