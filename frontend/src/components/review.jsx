import React from 'react';
import { Heading, Text, Anchor } from './primitive-components';

export const Review = ({ reviews }) => {
  const review = reviews?.[0];
  if (!review) return null;
  return (
    <>
      <Heading as="h3">{review.headline}</Heading>
      <Text>{review.summary}</Text>
      <Anchor target="_blank" href={review.link.url}>
        {review.link.suggestedLinkText}
      </Anchor>
    </>
  );
};
