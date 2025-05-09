-- CreateTable
CREATE TABLE "Folder" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "parent_id" INTEGER,

    CONSTRAINT "Folder_pkey" PRIMARY KEY ("id")
);
