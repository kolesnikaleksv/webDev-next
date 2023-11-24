import Heading, {HeadingProps} from "@/components/Heading";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Contacts page',
  description: 'Page for contacts',
}

const Contacts = () => {
  const headingProps: HeadingProps = {
    text: "List of contacts:"
  }
  return (
    <>
      <Heading {...headingProps} />
    </>
  )
}

export default Contacts;