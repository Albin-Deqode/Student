import { CacheInterceptor, CacheModule, Module } from "@nestjs/common";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { Student } from "@prisma/client";
import { PrismaModule } from "src/prisma/prisma.module";
// import { PrismaService } from "src/prisma/prisma.service";
import { StudentController } from './student.controller';
import { StudentService } from "./student.service";
@Module({
    
    imports:[PrismaModule,CacheModule.register()],
    controllers: [StudentController],
    providers:[StudentService,{
        provide:APP_INTERCEPTOR,
        useClass:CacheInterceptor
    }]
})
export class StudentModule{}
