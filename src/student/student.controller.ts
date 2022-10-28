import { Body, CacheInterceptor, CacheKey, CacheTTL, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Query, Req, Res, UseInterceptors } from '@nestjs/common';
import { StudentDto } from './dto';
import { StudentService } from './student.service';
import { ApiTags } from "@nestjs/swagger"
@UseInterceptors(CacheInterceptor)
@Controller('student')
@ApiTags('student')
export class StudentController {
    constructor(private studentService: StudentService) { }
    @Post()
    createUser(@Body() dto: StudentDto) {
        return this.studentService.createUser(dto)
    }
   @Get()
   @CacheKey("some_route")
   @CacheTTL(60)
   show(@Query() query ){
    // console.log(query);
    return this.studentService.show(query)
   }
    @Patch("/:id")
    updateUser(@Param("id") id,@Body() dto ){
        return this.studentService.updateUser(id,dto);
    }
    @Delete()
        delete(@Body() dto){
            return this.studentService.delete(dto.id);
        }
}
