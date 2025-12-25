import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding users...");

  const users = [
    // 👩 Girls (11)
    { name: "Ayesha Khan", email: "ayesha.khan@example.com" },
    { name: "Fatima Noor", email: "fatima.noor@example.com" },
    { name: "Sara Ahmed", email: "sara.ahmed@example.com" },
    { name: "Zainab Ali", email: "zainab.ali@example.com" },
    { name: "Hira Malik", email: "hira.malik@example.com" },
    { name: "Iqra Sheikh", email: "iqra.sheikh@example.com" },
    { name: "Maryam Raza", email: "maryam.raza@example.com" },
    { name: "Noor Fatima", email: "noor.fatima@example.com" },
    { name: "Laiba Hussain", email: "laiba.hussain@example.com" },
    { name: "Sana Yousaf", email: "sana.yousaf@example.com" },
    { name: "Anum Tariq", email: "anum.tariq@example.com" },

    // 👨 Boys (4)
    { name: "Muhammad Umer", email: "umer@example.com" },
    { name: "Ali Khan", email: "ali.khan@example.com" },
    { name: "Usman Shah", email: "usman.shah@example.com" },
    { name: "Ahmed Raza", email: "ahmed.raza@example.com" },
  ];

  await prisma.user.createMany({
    data: users,
    skipDuplicates: true, // 🔥 avoids unique email errors
  });

  console.log("✅ 15 users seeded successfully");
}

main()
  .catch((error) => {
    console.error("❌ Seeding failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });