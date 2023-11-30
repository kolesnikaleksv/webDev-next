import Heading, {HeadingProps} from "./Heading"
import {FC} from 'react'

const Footer:FC = () => {
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