import { PrismaClient } from "@prisma/client";
import { User } from "./generated/typegraphql-prisma/models/User";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export interface Context {
  prisma: PrismaClient;
  req: Request;
  res: Response;
  user?: User;
}

export function createContext(
  req: Request,
  res: Response,
  user?: User
): Context {
  return { prisma, req, res, user };
}
