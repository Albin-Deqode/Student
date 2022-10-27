/*
  Warnings:

  - A unique constraint covering the columns `[name,fatherName,fatherNumber]` on the table `Student` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Student_name_fatherName_fatherNumber_key" ON "Student"("name", "fatherName", "fatherNumber");
