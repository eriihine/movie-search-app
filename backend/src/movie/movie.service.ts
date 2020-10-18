import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { URLS } from 'src/constants';
import { Movie } from './movie.model';

@Injectable()
export class MovieService {
  private readonly logger = new Logger(MovieService.name);

  /**
   * Fetches movies matching search term from OMDB API
   */
  async searchMovies(search: string, page = 1): Promise<any> {
    try {
      const response = await axios.get(
        `${URLS.OMDB}&s=${encodeURIComponent(search)}&page=${page}`,
      );
      const maxPages = Math.ceil(response?.data?.totalResults / 10);
      const results = response?.data?.Search || [];
      const movies: Movie[] = results.map(result => new Movie(result));
      return { movies, maxPages };
    } catch (error) {
      this.logger.log(error);
      throw new BadRequestException();
    }
  }

  /**
   * Fetches  movie details from OMDB API based on omdb id
   */
  async getById(id: string): Promise<Movie | null> {
    try {
      const response = await axios.get(`${URLS.OMDB}&i=${id}`);
      const { data } = response;
      return data?.Response !== 'False' ? new Movie(data) : null;
    } catch (error) {
      this.logger.log(error);
      throw new BadRequestException();
    }
  }
}
