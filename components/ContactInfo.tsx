import Heading from "./Heading";
import { ContactProps } from "@/app/contacts/[id]/page";

const ContactInfo = ({contact}:{contact: ContactProps}) => {
  const {name, email, id} = contact || {};
  if(!contact) {
    return <Heading tag="h3" text="There is no information" />
  }

  return (
    <>
      <Heading tag='h3' text={name} />
      <div>
        <strong>Email: </strong>
        {email}
      </div>
    </>
  )
}
export default ContactInfo;