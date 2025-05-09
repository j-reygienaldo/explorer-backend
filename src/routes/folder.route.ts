import Elysia from "elysia";
import {
  createFolder,
  deleteFolder,
  getAllFolders,
  getParentFolder,
  getSubFolder,
  updateFolder,
} from "../services/folder.service";

export const folderRoutes = new Elysia({ prefix: "/folders" })
  .get("/", async () => {
    return await getAllFolders();
  })
  .get("/parent", async () => {
    return await getParentFolder();
  })
  .post("/", async ({ body: { name, parent_id } }) => {
    return await createFolder(name, parent_id);
  })
  .get("/:id/sub", async ({ params: { id } }) => {
    return await getSubFolder(Number(id));
  })
  .patch("/:id", async ({ params: { id }, body: { name } }) => {
    return await updateFolder(Number(id), name);
  })
  .delete("/:id", async ({ params: { id } }) => {
    return await deleteFolder(Number(id));
  });
