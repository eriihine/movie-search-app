import { Controller, Get, Param, Query } from '@nestjs/common';
import { Review } from 'src/review/review.model';
import { ReviewService } from 'src/review/review.service';
import { Movie } from './movie.model';
import { MovieService } from './movie.service';

interface MovieResult {
  movie: Movie;
  reviews: Review[] | null;
}

@Controller('movie')
export class MovieController {
  constructor(
    private movieService: MovieService,
    private reviewService: ReviewService,
  ) {}

  /**
   * GET method to search movies from OMDB by search term
   */
  @Get()
  async searchMovies(
    @Query('search') search: string,
    @Query('page') page: number,
  ): Promise<Movie[]> {
    return await this.movieService.searchMovies(search, page);
  }

  /**
   * GET method to fetch details for a movie by imdbId and reviews from NYT API by movie title
   */
  @Get(':id')
  async getById(@Param('id') id: string): Promise<MovieResult | null> {
    const movie = await this.movieService.getById(id);
    if (movie?.imdbID) {
      const reviews = await this.reviewService.searchReview(movie.title);
      return { movie, reviews };
    }
    return null;
  }
}
