import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Card,
  Heading,
  Image,
  Grid,
  Column,
  Text,
} from './primitive-components';

const PLACEHOLDER_URL = 'https://via.placeholder.com/250x350?text=poster%20N/A';

export const MovieList = ({ movies }) => {
  const history = useHistory();
  const handleClick = (id) => () => {
    history.push(`movies/details/${id}`);
  };

  if (movies === null) return null;
  if (movies?.length === 0)
    return (
      <Column>
        <Text>No movies found</Text>
      </Column>
    );

  return (
    <Grid>
      {movies.map((movie) => (
        <Card
          key={movie.imdbID}
          cursor="pointer"
          onClick={handleClick(movie.imdbID)}
        >
          <Heading>
            {movie.title} ({movie.year})
          </Heading>
          <Image
            src={movie.poster !== 'N/A' ? movie.poster : PLACEHOLDER_URL}
            alt={movie.title}
          />
        </Card>
      ))}
    </Grid>
  );
};
