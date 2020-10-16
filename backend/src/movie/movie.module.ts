import { Module } from '@nestjs/common';
import { ReviewService } from 'src/review/review.service';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  controllers: [MovieController],
  providers: [MovieService, ReviewService],
})
export class MovieModule {}
