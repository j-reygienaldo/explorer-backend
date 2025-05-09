import Elysia from "elysia";
import { createFile, deleteFile, updateFile } from "../services/file.service";

export const fileRoutes = new Elysia({ prefix: "/file" })
  .post("/", async ({ body: { name, type, folder_id } }) => {
    return await createFile(name, type, folder_id);
  })
  .patch("/:id", async ({ params: { id }, body: { name, type } }) => {
    return await updateFile(Number(id), name, type);
  })
  .delete("/:id", async ({ params: { id } }) => {
    return await deleteFile(Number(id));
  });
