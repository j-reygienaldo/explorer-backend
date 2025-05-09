-- CreateTable
CREATE TABLE "FIle" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "folder_id" INTEGER,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "deleted_at" TIMESTAMP(3),
    "isDeleted" BOOLEAN,

    CONSTRAINT "FIle_pkey" PRIMARY KEY ("id")
);
