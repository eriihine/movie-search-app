import { debounce } from 'debounce';
import React, { useCallback, useEffect } from 'react';
import { Box, Input } from './primitive-components';
import { searchMovies } from '../api/api';
import { sortByYear } from '../utils';

export const SearchBar = ({
  setMovies,
  setMaxPageCount,
  searchTerm,
  setSearchTerm,
  setCurrentPage,
}) => {
  const getMovies = useCallback(
    debounce(async (searchTerm) => {
      const response = await searchMovies(searchTerm);
      const movies = response?.data?.movies || [];
      const maxPages = response?.data?.maxPages || 1;
      movies.sort(sortByYear);
      setMovies(movies);
      setMaxPageCount(maxPages);
      setCurrentPage(1);
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
