/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Session } from './entities/session.schema';
import mongoose from 'mongoose';

@Injectable()
export class SessionService {
  constructor(
    @InjectModel(Session.name)
    private sessionModel:mongoose.Model<Session>
){}

async create(Session):Promise<Session>{
  const session=await this.sessionModel.create(Session)
  return session
}

  async findAll():Promise<Session[]> {
    const sessions=await this.sessionModel.find()
        return sessions;
  }

  async findById(id:string):Promise<Session>{
    const session=await this.sessionModel.findById(id)
    if(!session){
        throw new NotFoundException('Not registered working session...!!!');
    }
    return session
}

async updateById(id:string,session:Session):Promise<Session>{
    return await this.sessionModel.findByIdAndUpdate(id,session,{
        new:true,
        runValidators:true,
    });
    
}

async deleteById(id:string):Promise<Session>{
    return await this.sessionModel.findByIdAndDelete(id)
    
}

}
