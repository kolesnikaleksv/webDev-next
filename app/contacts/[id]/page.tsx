import { FC } from "react"
import { contactType } from "@/type"
import { Metadata } from "next"
import ContactInfo from "@/components/ContactInfo"
import Heading, {HeadingProps} from "@/components/Heading"

export const metadata: Metadata = {
  title: 'Contact page',
  description: 'Page for a contact'
}

const getFetchData = async (id: number) => {
  const staticData = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { cache: 'force-cache' });
  const data = await staticData.json();

  return data
}

const Contact: FC<contactType> = async (context: any) => {
  const {id} = context.params;
  const data = await getFetchData(id)

  const headingProps: HeadingProps = {
    text: 'Contact page'
  }
  
  return (
    <>
      <Heading {...headingProps} />
      <ContactInfo contact={data} />
    </>
  )
}

export default Contact;