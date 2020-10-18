import axios from 'axios';

const BASE_ULR = 'http://localhost:3000';

export const api = axios.create({ baseURL: BASE_ULR });

export const searchMovies = async (searchTerm, page = 1) => {
  return api.get(
    `/movie?search=${encodeURIComponent(searchTerm)}&page=${page}`,
  );
};

export const getMovieDetailsById = async (omdbId) => {
  return api.get(`/movie/${omdbId}`);
};
