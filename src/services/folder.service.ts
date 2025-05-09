import { db } from "../db";

export async function getAllFolders() {
  const result = await db.folder.findMany();

  if (result)
    return {
      message: "Succesfully fetch data!",
      data: result,
    };
}

export async function getParentFolder() {
  const result = await db.folder.findMany({
    where: { parent_id: null, isDeleted: false || null },
    orderBy: { id: "asc" },
  });

  return {
    message: "Succesfully fetch data!",
    data: result,
  };
}

export async function getSubFolder(parent_id: number) {
  const result = await db.folder.findMany({
    where: { parent_id, isDeleted: false || null },
    orderBy: { id: "asc" },
  });

  if (result)
    return {
      message: "Succesfully fetch data!",
      data: result,
    };
}

export async function createFolder(name: string, parent_id?: number) {
  if (parent_id !== null || parent_id !== "") {
    const findParentId = await db.folder.findFirst({
      where: {
        parent_id,
      },
    });

    if (!findParentId)
      return {
        message: "Folder parent_id not found!",
      };
  }

  const result = await db.folder.create({
    data: {
      name,
      parent_id: parent_id,
    },
  });

  return {
    message: "Succesfully add new folder!",
    data: result,
  };
}

export async function updateFolder(id: number, name?: string) {
  const findFolder = await db.folder.findFirst({
    where: { id },
  });

  if (!findFolder) {
    return {
      message: "Folder not found!",
    };
  }

  const updatedFolderName = await db.folder.update({
    where: { id: findFolder.id },
    data: { name },
  });

  return {
    message: "Succesfully update folder name!",
    data: updatedFolderName,
  };
}

export async function deleteFolder(id: number) {
  const findFolder = await db.folder.findFirst({
    where: { id },
  });

  if (!findFolder) {
    return {
      message: "Folder not found!",
    };
  }

  const deletedFolder = await db.folder.update({
    where: { id },
    data: {
      isDeleted: true,
      deleted_at: new Date().toISOString(),
    },
  });

  return {
    message: `Succesfully delete folder with id: ${deletedFolder.id}`,
  };
}
