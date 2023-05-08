/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString ,IsDate, IsEmail, MinLength} from 'class-validator';



export class LoginDto {
    
    @IsNotEmpty()
    @IsEmail({},{message:"Please enter valied email"})
    readonly email : string;
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password: string;
    

}