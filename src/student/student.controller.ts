import { Body, Controller, Get, ParseIntPipe, Patch, Post, Req, Res } from '@nestjs/common';
import { StudentDto } from './dto';
import { StudentService } from './student.service';
import {ApiTags}from "@nestjs/swagger"
@Controller('student')
@ApiTags('student')
export class StudentController {
    constructor(private studentService:StudentService){}
    @Post()
    createUser(@Body() dto:StudentDto ){
        
        return this.studentService.createUser(dto)
    }
    @Get()
        showAll(){
            return this.studentService.showAll()
        }
    @Patch()
        updateUser(@Body() dto:StudentDto){
            return this.studentService.updateUser();
        }
    
}
