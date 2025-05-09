import { Elysia } from "elysia";
import { folderRoutes } from "./routes/folder.routes";

const app = new Elysia({ prefix: "/api/v1" });

app.use(folderRoutes);

app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
