import { Module } from "@nestjs/common";
import { Student } from "@prisma/client";
import { PrismaModule } from "src/prisma/prisma.module";
// import { PrismaService } from "src/prisma/prisma.service";
import { StudentController } from './student.controller';
import { StudentService } from "./student.service";
@Module({
    
    imports:[PrismaModule],
    controllers: [StudentController],
    providers:[StudentService]
})
export class StudentModule{}
