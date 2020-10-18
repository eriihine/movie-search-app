import { Module } from '@nestjs/common';
import { MovieModule } from './movie/movie.module';
import { ReviewModule } from './review/review.module';

@Module({
  imports: [MovieModule, ReviewModule],
})
export class AppModule {}
