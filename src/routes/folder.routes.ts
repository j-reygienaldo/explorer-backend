import Elysia from "elysia";
import { getAllFolders, getSubFolder } from "../services/folder.service";

export const folderRoutes = new Elysia({ prefix: "/folders" })
  .get("/", async () => {
    return await getAllFolders();
  })
  .get("/:id/sub", async ({ params }) => {
    return await getSubFolder(Number(params.id));
  });
