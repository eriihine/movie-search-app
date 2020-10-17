import { debounce } from 'debounce';
import React, { useCallback, useEffect } from 'react';
import { Box, Input } from './primitive-components';
import { searchMovies } from '../api/api';
import { sortByYear } from '../utils';

export const SearchBar = ({ setMovies, searchTerm, setSearchTerm }) => {
  const getMovies = useCallback(
    debounce(async (searchTerm) => {
      const response = await searchMovies(searchTerm);
      const movies = response?.data || [];
      movies.sort(sortByYear);
      setMovies(movies);
    }, 1000),
    [],
  );

  useEffect(() => {
    if (searchTerm !== '') {
      getMovies(searchTerm);
    }
  }, [searchTerm, getMovies]);

  return (
    <Box>
      <Input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search a movie by title..."
      />
    </Box>
  );
};
