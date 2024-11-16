import { PrismaClient } from "@prisma/client";

// Extend the global type to include `prisma`
declare global {
  // Augment `globalThis` with the `prisma` property
  var prisma: PrismaClient | undefined;
}

// Create a single PrismaClient instance
export const db = globalThis.prisma || new PrismaClient();

// Assign the PrismaClient instance to `globalThis.prisma` in development
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
