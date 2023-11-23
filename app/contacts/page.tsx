import Heading, {HeadingProps} from "@/components/Heading";

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