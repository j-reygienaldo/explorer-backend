import { db } from "../db";

export async function createFile(
  name: string,
  type: string,
  folder_id?: number
) {
  if (folder_id !== null || folder_id !== "") {
    const findFolder = await db.folder.findFirst({
      where: {
        id: folder_id,
      },
    });

    if (!findFolder)
      return {
        message: `Folder with id ${folder_id} not found!`,
      };
  }

  const result = await db.file.create({
    data: {
      name,
      folder_id,
      type,
    },
  });

  return {
    message: "Succesfully add new file!",
    data: result,
  };
}

export async function updateFile(id: number, name?: string, type?: string) {
  const findFile = await db.file.findFirst({
    where: { id },
  });

  if (!findFile) {
    return {
      message: "File not found!",
    };
  }

  const updatedFile = await db.file.update({
    where: { id: findFile.id },
    data: {
      name: name || findFile.name,
      type: type || findFile.type,
    },
  });

  return {
    message: "Succesfully update file!",
    data: updatedFile,
  };
}

export async function deleteFile(id: number) {
  const findFile = await db.file.findFirst({
    where: { id },
  });

  if (!findFile) {
    return {
      message: "File not found!",
    };
  }

  const deletedFile = await db.file.update({
    where: { id },
    data: {
      isDeleted: true,
      deleted_at: new Date().toISOString(),
    },
  });

  return {
    message: `Succesfully delete file with id: ${deletedFile.id}`,
  };
}
