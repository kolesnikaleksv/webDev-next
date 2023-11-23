import Heading, {HeadingProps} from "@/components/Heading";

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