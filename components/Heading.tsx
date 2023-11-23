export interface HeadingProps {
  tag?: keyof JSX.IntrinsicElements;
  text: string;
}

const Heading: React.FC<HeadingProps> = ({ tag, text }) => {
  const Tag = tag || 'h1';

  return <Tag>{text}</Tag>;
};

export default Heading;