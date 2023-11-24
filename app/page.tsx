import Image from 'next/image';
import React from 'react';
import Heading, { HeadingProps } from '@/components/Heading';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
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
    </div>
  );
};

export default Home;