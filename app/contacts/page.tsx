import Heading, {HeadingProps} from "@/components/Heading";
import type { Metadata } from 'next'
import Link from "next/link";

interface ContactsProps {
  id: number;
  name: string;
  email: string;
  username: string;
}

export const metadata: Metadata = {
  title: 'Contacts page',
  description: 'Page for contacts',
}

const Contacts = async () => {
  const staticData = await fetch(`https://jsonplaceholder.typicode.com/users`, { cache: 'force-cache' });
  const data: ContactsProps[] = await staticData.json();

  const headingProps: HeadingProps = {
    text: "List of contacts:"
  }
  return (
    <>
      <Heading {...headingProps} />
      <ul>
        {
          data && data.map(({id, name, email, username}) => (
            <li key={id}>{name}<Link href={`/contacts/${username}`}>({email})</Link></li>
          ))
        }
      </ul>
    </>
  )
}

export default Contacts;