import Heading, {HeadingProps} from "@/components/Heading";
import type { Metadata } from 'next'
import Link from "next/link";

interface ContactsProps {
  id: number;
  name: string;
  email: string;
}

export const metadata: Metadata = {
  title: 'Contacts page',
  description: 'Page for contacts',
}

const getStaticData = async () => {
  const staticData = await fetch(`https://jsonplaceholder.typicode.com/users`, { cache: 'force-cache' });
  const data: ContactsProps[] = await staticData.json();

  return {
    props: {contacts: data}
  }
}

const Contacts = async () => {
  const data = await getStaticData()

  const headingProps: HeadingProps = {
    text: "List of contacts:"
  }
  return (
    <>
      <Heading {...headingProps} />
      <ul>
        {
          data && data.props.contacts.map(({id, name, email}) => (
            <li key={id}>{name}<Link href={`/contacts/${id}`}>({email})</Link></li>
          ))
        }
      </ul>
    </>
  )
}

export default Contacts;