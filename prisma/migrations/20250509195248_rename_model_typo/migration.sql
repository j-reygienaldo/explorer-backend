/*
  Warnings:

  - You are about to drop the `FIle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "FIle";

-- CreateTable
CREATE TABLE "File" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "folder_id" INTEGER,
    "type" VARCHAR(20),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),
    "isDeleted" BOOLEAN,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);
