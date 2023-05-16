/* eslint-disable prettier/prettier */
import { Prop, SchemaFactory } from '@nestjs/mongoose';
import { Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { User } from 'src/auth/schemas/auth.schemas';
import { Service } from 'src/services/entities/service.schemas';

@Schema({
    timestamps: true,
  })
export class UserReview {
   
    comment: string;
    @Prop()
    rate:number;
    @Prop({ type: mongoose.Schema.Types.Map, ref: 'User' })
    user: User;
    @Prop({ type: mongoose.Schema.Types.Map, ref: 'Service' })
    service: Service;
}

export const UserReviewSchema = SchemaFactory.createForClass(UserReview);

