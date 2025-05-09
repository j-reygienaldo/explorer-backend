import { Elysia } from "elysia";
import cors from "@elysiajs/cors";
import { folderRoutes } from "./routes/folder.routes";

const app = new Elysia({ prefix: "/api/v1" });

app.use(folderRoutes);

app.use(cors());

app.listen(4000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
