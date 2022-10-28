import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { randomUUID } from 'crypto';
import { PrismaService } from 'src/prisma/prisma.service';
import { json } from 'stream/consumers';
import { StudentDto } from './dto';

@Injectable()
export class StudentService {
    constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache ,private prisma: PrismaService){}
    // constructor( ){}
    toJson(data) {
        return JSON.stringify(data, (_, v) => typeof v === 'bigint' ? v.toString() : v);
    }
   
   async createUser(dto:StudentDto){
      try{
    //   console.log(dto)
        
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
   async show(dto){
    try{
    // console.log(id);
  //  / // console.log(dto);
  await this.cacheManager.set("cached-item",{key:dto.id},3600);
  // console.log(await this.cacheManager.get("cached-item"));
      const student = await this.prisma.student.findMany({
        where:{
          id:dto.id
        }
      })
        
      return this.toJson(student)
    
    }
    catch(e){
      console.log(e);
      return e;   
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
    return this.toJson(student)
  }
    catch(e){
      console.log(e);
      return e;
    }
   }
 
  
 async delete(id){
 try {
    const student = await this.prisma.student.deleteMany({
      where:{
        id
      }
    })
  return student 


} catch(e){
    console.log(e);
    return e;
  }
  
  }
 

}
