import { Controller, Get, Query } from '@nestjs/common';
import { Review } from './review.model';
import { ReviewService } from './review.service';

@Controller('review')
export class ReviewController {
  constructor(private reviewService: ReviewService) {}

  @Get()
  async searchReview(@Query('query') query: string): Promise<Review[]> {
    return await this.reviewService.searchReview(query);
  }
}
