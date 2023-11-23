import Heading, {HeadingProps} from "./Heading"

const Footer = () => {
  const headingProps: HeadingProps = {
    tag: 'h2',
    text: 'Created by AlexKolisnyk',
  };
  
  return (
    <footer>
      <Heading {...headingProps}/>
    </footer>
  )
}

export default Footer;