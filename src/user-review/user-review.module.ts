/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserReviewService } from './user-review.service';
import { UserReviewController } from './user-review.controller';
import { UserReviewSchema } from './entities/user-review.schema';
import { AuthModule } from 'src/auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports:[AuthModule,
    MongooseModule.forFeature([{name:'UserReview',schema:UserReviewSchema}])],
  controllers: [UserReviewController],
  providers: [UserReviewService]
})
export class UserReviewModule {}
