/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserReviewDto } from './dto/create-user-review.dto';
import { UpdateUserReviewDto } from './dto/update-user-review.dto';
import { UserReview } from './entities/user-review.schema';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Injectable()
export class UserReviewService {
  constructor(
    @InjectModel(UserReview.name)
    private userReviewModel:mongoose.Model<UserReview>
  ){}

  async create(createUserReviewDto: CreateUserReviewDto):Promise<UserReview> {
    const userReview=await this.userReviewModel.create(createUserReviewDto)
        return userReview;
  }


  async findAll():Promise<UserReview[]> {
    const userReviews=await this.userReviewModel.find()
        return userReviews;
  }

  async findOne(id:string):Promise<UserReview>{
    const userReview=await this.userReviewModel.findById(id)
    if(!userReview){
        throw new NotFoundException('Not a registered UserReview...!!!');
    }
    return userReview;
}

async update(id: string, updateUserReviewDto: UpdateUserReviewDto):Promise<UserReview>{
    return await this.userReviewModel.findByIdAndUpdate(id,updateUserReviewDto,{
        new:true,
        runValidators:true,
    });
  }

  async remove(id: string):Promise<UserReview>{
    return await this.userReviewModel.findByIdAndDelete(id)
    
}
}
