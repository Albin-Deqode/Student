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
    
        return student.id
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
   async showOne(id){
    try{
      const student = await this.prisma.student.findUnique({
        where:{
          id
        }
      })
      return this.toJson(student)
    }
    catch(e){
      console.log(e);
    }
   }
   async updateUser(id,dto){
    try{
    const prevStudent = await this.prisma.student.findUnique({
      where:{
        id
      }
    })
    const updatedStudent = 
     { name: dto.name?dto.name:prevStudent.name,
      batch: dto.batch?dto.batch:prevStudent.batch,
      section:dto.section?dto.section:prevStudent.section,
      address:dto.address?dto.address:prevStudent.address,
      dob: dto.dob?dto.dob:prevStudent.dob,
      fatherName:dto.fatherName?dto.fatherName:prevStudent.fatherName,
      fatherNumber:dto.fatherNumber?dto.fatherNumber:prevStudent.fatherNumber


    }
    // console.log(id,updatedStudent);
    const student = await this.prisma.student.update({
      where:{
        id
      },
      data: updatedStudent
    })
    return student.id
  }
    catch(e){
      console.log(e);
    }
   }
   async deleteUser(id){
    try{const student = await this.prisma.student.delete({
      where:{
        id
      }
    })
    return {msg:"Deleted User"}}
    catch(e){
      console.log(e);
    }
  }
 async deleteAllUser(){
 try {const student = await this.prisma.student.deleteMany({})
  return {msg:"Successfully Deleted all the Students "}

  } catch(e){
    console.log(e);
  }
  
  }
 

}
