/* eslint-disable prettier/prettier */
import { Body, Post, Get, Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService:AuthService){}

    @Post('/signup')
    signUp(@Body() signupDto:SignUpDto):Promise<{token:string}>{
        return this.authService.signUp(signupDto);
    }

    @Post('/signin')
    signIn(@Body() loginDto:LoginDto):Promise<{token:string}>{
        return this.authService.signIn(loginDto);
    }
    
}
