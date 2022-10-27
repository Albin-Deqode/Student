import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { json } from 'stream/consumers';
import { StudentDto } from './dto';

@Injectable()
export class StudentService {
    constructor(private prisma: PrismaService){}
    toJson(data) {
        return JSON.stringify(data, (_, v) => typeof v === 'bigint' ? v.toString() : v);
    }
   async createUser(dto:StudentDto){
      try{
    //   console.log(dto);
        const student = await this.prisma.student.create({
            data:{
                name: dto.name,
                batch : dto.batch,
                section:dto.section,
                address: dto.address,
                dob: dto.dob,
                fatherName: dto.fatherName,
                fatherNumber: dto.fatherNumber,
            }

        })
    
        return this.toJson(student)
      }
      catch(e){
        console.log(e);
        return e;
      }
    }
   async showAll(){
    try{
      const student = await this.prisma.student.findMany({})
      return this.toJson(student)
    } catch(e){
        console.log(e);
        return e;
      }
   }
   async updateUser(){

   }
}
