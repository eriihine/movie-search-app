import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { MovieDetails } from './movie-details';
import { MovieList } from './movie-list';
import { SearchBar } from './search-bar';
import { Box, Button, Main } from './primitive-components';
import { searchMovies } from '../api/api';
import { sortByYear } from '../utils';

export const MainContainer = () => {
  const [movies, setMovies] = useState(null);
  const [maxPageCount, setMaxPageCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const hasMorePages = currentPage < maxPageCount;

  const loadMorePages = async () => {
    const response = await searchMovies(searchTerm, currentPage + 1);
    const loadedMovies = response?.data?.movies || [];
    loadedMovies.sort(sortByYear);
    setMovies([...movies, ...loadedMovies]);
    setCurrentPage(currentPage + 1);
  };

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
              setMaxPageCount={setMaxPageCount}
              setSearchTerm={setSearchTerm}
              setCurrentPage={setCurrentPage}
              searchTerm={searchTerm}
            />
            <MovieList movies={movies} />
            {hasMorePages && <Button onClick={loadMorePages}>Load more</Button>}
          </Box>
        </Route>
        <Route exact path="*">
          <Redirect to="/movies" />
        </Route>
      </Switch>
    </Main>
  );
};
