import dotenv = require('dotenv');
dotenv.config({ path: '../.env' });

const OMDB_API_KEY = process.env.OMDB_API_KEY;
const NYT_API_KEY = process.env.NYT_API_KEY;

export const URLS = {
  OMDB: `http://www.omdbapi.com/?type=movie&apikey=${OMDB_API_KEY}`,
  NYT: `https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=${NYT_API_KEY}`,
};
