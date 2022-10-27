import{IsNotEmpty,MinLength,IsNumber,MaxLength} from "class-validator"
import {ApiProperty}from "@nestjs/swagger"
 export class StudentDto{
    @ApiProperty()
    @IsNotEmpty()
    @MinLength(5)
    name:string;
     @ApiProperty()
    @IsNotEmpty()
    batch:string;
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(1)
    section:string;
    
 @ApiProperty()
    @IsNotEmpty()
    @MinLength(5)
    address:string;
    
 @ApiProperty()
    @IsNotEmpty()
    dob:string;
    
 @ApiProperty()
    @IsNotEmpty()
    @MinLength(5)
    fatherName:string;
    
 @ApiProperty()
    @IsNumber()
    fatherNumber:number;
}