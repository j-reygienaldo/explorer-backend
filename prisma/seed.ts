import { PrismaClient } from "../src/generated/prisma";

const db = new PrismaClient();

async function main() {
  await db.folder.createMany({
    data: [
      {
        name: "Documents",
        parent_id: null,
        created_at: "2025-05-09T18:49:14.064Z",
      },
      {
        name: "Pictures",
        parent_id: null,
        created_at: "2025-05-09T18:49:14.064Z",
      },
      {
        name: "Downloads",
        parent_id: null,
        created_at: "2025-05-09T18:49:14.064Z",
      },
      { name: "Codes", parent_id: 1, created_at: "2025-05-09T18:49:14.064Z" },
      { name: "Movies", parent_id: 3, created_at: "2025-05-09T18:49:14.064Z" },
    ],
  });

  await db.file.createMany({
    data: [
      {
        name: "text.docx",
        folder_id: null,
        type: "document",
        created_at: "2025-05-09T18:49:14.064Z",
      },
      {
        name: "pic.png",
        folder_id: 1,
        type: "picture",
        created_at: "2025-05-09T18:49:14.064Z",
      },
      {
        name: "song.mp3",
        folder_id: 2,
        type: "music",
        created_at: "2025-05-09T18:49:14.064Z",
      },
    ],
  });
}

main()
  .then(() => {
    console.log("Seeding completed!");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
