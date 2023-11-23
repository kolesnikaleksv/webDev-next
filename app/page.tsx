import React from 'react';
import Heading, { HeadingProps } from '@/components/Heading';

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {
  const headingProps: HeadingProps = {
    tag: 'h1',
    text: 'Home page',
  };

  return (
    <div className='flex flex-col flex-1 justify-between items-center'>
      <Heading {...headingProps} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima dignissimos magni quasi,
        consequatur officia excepturi dicta beatae voluptatem enim. Aliquam!
      </p>
    </div>
  );
};

export default Home;