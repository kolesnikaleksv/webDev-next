import Heading, {HeadingProps} from "@/components/Heading";
import type { Metadata } from 'next'

interface ContactsProps {
  id: number;
  name: string;
  email: string;
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
          data && data.map(({id, name, email}) => (
            <li key={id}>{name}<strong>({email})</strong></li>
          ))
        }
      </ul>
    </>
  )
}

export default Contacts;