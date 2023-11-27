import ContactInfo from "@/components/ContactInfo";
import Heading, {HeadingProps} from "@/components/Heading";
import { Metadata } from "next";
import { FC } from "react";
import { ParsedUrlQuery } from 'querystring'

export const metadata: Metadata = {
  title: 'Contact page',
  description: 'Page for a contact'
}

export interface ContactProps{
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}
interface IParams extends ParsedUrlQuery {
  slug: string
}
const getFetchData = async (id: number) => {
  const staticData = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { cache: 'force-cache' });
  const data: ContactProps = await staticData.json();

  return data
}

const Contact: FC<ContactProps> = async (context: any) => {
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