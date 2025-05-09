import { PrismaClient } from "../src/generated/prisma";

const db = new PrismaClient();

async function main() {
  await db.folder.createMany({
    data: [
      {
        name: "Documents",
        parent_id: null,
        created_at: "2025-05-09 09:47:51.924",
      },
      {
        name: "Pictures",
        parent_id: null,
        created_at: "2025-05-09 09:47:51.924",
      },
      {
        name: "Downloads",
        parent_id: null,
        created_at: "2025-05-09 09:47:51.924",
      },
      { name: "Codes", parent_id: 1, created_at: "2025-05-09 09:47:51.924" },
      { name: "Movies", parent_id: 3, created_at: "2025-05-09 09:47:51.924" },
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
