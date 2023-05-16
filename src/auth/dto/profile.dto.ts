/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsString ,IsDate, IsEmail, MinLength} from 'class-validator';
import { Role } from '../schemas/auth.schemas';



export class ProfileDto {
    @IsNotEmpty()
    @IsString()
    readonly first_name:string;
    @IsNotEmpty()
    @IsString()
    readonly last_name:string;
    @IsNotEmpty()
    @IsEmail({},{message:"Please enter valied email"})
    readonly email : string;
    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password: string;
    @IsNotEmpty()
    @IsString()
    readonly gender:string;
    @IsNotEmpty()
    @IsString()
    readonly contact_no:string;
    @IsNotEmpty()
    @IsString()
    readonly address: string;
    readonly is_active:boolean;
    @IsString()
    readonly role: Role;
    

}