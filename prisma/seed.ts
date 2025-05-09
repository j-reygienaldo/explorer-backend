import { PrismaClient } from "../src/generated/prisma";

const db = new PrismaClient();

async function main() {
  await db.folder.createMany({
    data: [
      { name: "Documents", parent_id: null },
      { name: "Pictures", parent_id: null },
      { name: "Downloads", parent_id: null },
      { name: "Codes", parent_id: 1 },
      { name: "Movies", parent_id: 3 },
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
