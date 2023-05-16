/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/auth.schemas';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs'
import { JwtService } from '@nestjs/jwt';
import { use } from 'passport';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { ProfileDto } from './dto/profile.dto';

@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name)
        private userModel:Model<User>,
        private jwtService:JwtService
    ){}
    async signUp(signUpDto:SignUpDto):Promise<{token:string}>{
        const{first_name,last_name,email,password,gender,contact_no,address,is_active,role}=signUpDto
        const hashedPassword=await bcrypt.hash(password,10)
        const user=await this.userModel.create({
            first_name,
            last_name,
            email,
            password:hashedPassword,
            gender,
            contact_no,
            address,
            is_active,
            role


        })

        const token=this.jwtService.sign({id:user._id})

        return {token}
    }

    async signIn(loginDto:LoginDto):Promise<{user:User,token:string}>{
        const{email,password}=loginDto;
        const user= await this.userModel.findOne({email});
        if(!user){
            throw new UnauthorizedException("Invalied email ");
        }

        const isPasswordMatched= await bcrypt.compare(password,user.password);
        if(!isPasswordMatched){
            throw new UnauthorizedException("Invalied password");
        }
        
        const token=this.jwtService.sign({id:user._id});
        
        

        return {user:user ,token : token}

    
    }
}

