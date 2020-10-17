import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { MovieDetails } from './movie-details';
import { MovieList } from './movie-list';
import { SearchBar } from './search-bar';
import { Box, Main } from './primitive-components';

export const MainContainer = () => {
  const [movies, setMovies] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Main>
      <Switch>
        <Route path="/movies/details/:id">
          <MovieDetails />
        </Route>
        <Route path="/movies">
          <Box>
            <SearchBar
              setMovies={setMovies}
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
            />
            <MovieList movies={movies} />
          </Box>
        </Route>
        <Route exact path="*">
          <Redirect to="/movies" />
        </Route>
      </Switch>
    </Main>
  );
};
