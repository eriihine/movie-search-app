import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { URLS } from 'src/constants';
import { Review } from './review.model';

@Injectable()
export class ReviewService {
  private readonly logger = new Logger(ReviewService.name);

  async searchReview(query: string): Promise<Review[]> {
    try {
      const response = await axios.get(`${URLS.NYT}&query=${query}`);
      const results = response?.data?.results || [];
      return results?.map(result => new Review(result));
    } catch (error) {
      this.logger.log(error);
      throw new BadRequestException();
    }
  }
}
