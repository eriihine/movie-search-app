import React, { useEffect, useState } from 'react';
import { Card, Column, Heading, Image, Text } from './primitive-components';
import { getMovieDetailsById } from '../api/api';
import { useParams } from 'react-router-dom';
import { Review } from './review';
import { Spinner } from './spinner';

const PLACEHOLDER_URL = 'https://via.placeholder.com/250x350?text=poster%20N/A';

export const MovieDetails = () => {
  let { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  useEffect(() => {
    const getMovieDetails = async () => {
      const response = await getMovieDetailsById(id);
      const { movie, reviews } = response?.data;
      setMovieDetails({ movie, reviews });
    };
    getMovieDetails();
  }, [id]);

  if (!movieDetails) return <Spinner />;
  const { movie, reviews } = movieDetails;
  return (
    <Column>
      {
        <Card minWidth="400px" maxWidth="800px">
          <Heading center>
            {movie.title} ({movie.year})
          </Heading>
          <Text center>{movie.genre}</Text>
          <Image
            maxWidth="600px"
            src={movie.poster !== 'N/A' ? movie.poster : PLACEHOLDER_URL}
            alt={movie.title}
          />
          <Heading as="h3">Plot summary</Heading>
          <Text>
            {movie.plot === 'N/A'
              ? 'Plot not found from open movie db.'
              : movie.plot}
          </Text>
          <Review reviews={reviews} />
        </Card>
      }
    </Column>
  );
};
