import Heading from "./Heading"
import { contactType } from "@/type"
import {FC} from 'react'

type contactInfoProps = {
  contact: contactType
}

const ContactInfo:FC<contactInfoProps> = ({contact}) => {
  const {name, email, address} = contact || {};
  const {street, suit, city} = address || {};

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
      <div>
        <strong>Address: </strong>
        {`${street}, ${suit}, ${city}`}
      </div>
    </>
  )
}
export default ContactInfo;