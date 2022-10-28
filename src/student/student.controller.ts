import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req, Res } from '@nestjs/common';
import { StudentDto } from './dto';
import { StudentService } from './student.service';
import { ApiTags } from "@nestjs/swagger"
import { identity } from 'rxjs';
@Controller('student')
@ApiTags('student')
export class StudentController {
    constructor(private studentService: StudentService) { }
    @Post()
    createUser(@Body() dto: StudentDto) {

        return this.studentService.createUser(dto)
    }
    @Get()
    showAll() {
        return this.studentService.showAll()
    }
    @Get("/:id")
    showOne(@Param("id") id) {
        return this.studentService.showOne(id);
    }
    @Patch("/:id")
    updateUser(@Param("id") id,@Body() dto ){
        return this.studentService.updateUser(id,dto);
    }
    @Delete("/:id")
        deleteUser(@Param("id") id){
            return this.studentService.deleteUser(id);
        }
    @Delete()
        deleteAllUser(){
            return this.studentService.deleteAllUser();
        }
}
