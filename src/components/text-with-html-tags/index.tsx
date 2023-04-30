import React from 'react';
import parse from 'html-react-parser';

type Props = {
  text: string;
};

export const TextWithHtmlTags = ({ text }: Props) => {
  const parsedText = parse(text);

  return <>{parsedText}</>;
};
