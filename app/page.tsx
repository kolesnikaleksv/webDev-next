import Image from 'next/image'
import React from 'react'
import Heading, { HeadingProps } from '@/components/Heading'
import Social from '@/components/Social'

interface HomeProps {}

export interface SocialInfo {
  id: number;
  icon: string;
  path: string;
}

const getSocialInfo = async () => {
  const staticData = await fetch("http://localhost:3000/api");
  const data = await staticData.json();

  return data
}

const Home: React.FC<HomeProps> = async () => {
  const socialData  = await getSocialInfo()
 
  const headingProps: HeadingProps = {
    tag: 'h1',
    text: 'Next.js Application',
  };

  return (
    <div className='flex flex-col flex-1 justify-between items-center'>
      <Heading {...headingProps} />
      <Image 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNTQSAJxtSBi5s7ISW0ieiDdLMZCkBIwJy5nK0bxF0EkHfEubBFHKBaBEbVNAWe0D2NMo&usqp=CAU"
        width={300}
        height={240}
        alt="Naja pallida"
        placeholder='empty'
        // priority={false}
      />
      <Social social={socialData}/>
    </div>
  );
};

export default Home;