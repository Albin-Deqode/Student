-- CreateTable
CREATE TABLE "Student" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "class" INTEGER NOT NULL,
    "section" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "dob" TEXT NOT NULL,
    "fatherName" TEXT NOT NULL,
    "fatherNumber" BIGINT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Student_id_key" ON "Student"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Student_name_fatherName_fatherNumber_key" ON "Student"("name", "fatherName", "fatherNumber");
