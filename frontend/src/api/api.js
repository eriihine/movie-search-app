import axios from 'axios';

const BASE_ULR = 'http://localhost:3000';

export const api = axios.create({ baseURL: BASE_ULR });

export const searchMovies = async (searchTerm) => {
  return api.get(`/movie?search=${encodeURIComponent(searchTerm)}`);
};

export const getMovieDetailsById = async (omdbId) => {
  return api.get(`/movie/${omdbId}`);
};
