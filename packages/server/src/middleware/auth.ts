import { Request } from "express";
import * as jwt from "jsonwebtoken";
import { User } from "../generated/typegraphql-prisma/models/User";
import { JWT_COOKIE_NAME } from "../util/constants";

export interface IJwtPayload extends Omit<User, "password"> {}

function parseCookies(cookies: string) {
  return cookies.split(";").reduce((res, item) => {
    const data = item.trim().split("=");
    return { ...res, [data[0]]: data[1] };
  }, {});
}

export const authenticate = (req: Request): IJwtPayload | null => {
  if (!req.headers.cookie) return null;
  const cookies = parseCookies(req.headers.cookie);
  const token = cookies[JWT_COOKIE_NAME];
  const payload = jwt.verify(token, process.env.JWT_SECRET) as IJwtPayload;
  return payload;
};
