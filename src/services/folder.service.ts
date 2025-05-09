import { db } from "../db";

export async function getAllFolders() {
  const result = await db.folder.findMany();

  if (result)
    return {
      message: "Succesfully fetch data!",
      data: result,
    };
}

export async function getSubFolder(parent_id: number) {
  return await db.folder.findMany({ where: { parent_id } });
}
