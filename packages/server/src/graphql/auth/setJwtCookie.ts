import { Response } from "express";
import * as jwt from "jsonwebtoken";
import { User } from "../../generated/typegraphql-prisma/models/User";
import { IJwtPayload } from "../../middleware/auth";
import {
  IS_PROD,
  IS_SECURE,
  JWT_COOKIE_AGE,
  JWT_COOKIE_NAME,
} from "../../util/constants";

export const setJwtCookie = (user: User, res: Response) => {
  const token = jwt.sign(
    { ...user } as IJwtPayload,
    process.env.JWT_SECRET,
    {
      expiresIn: JWT_COOKIE_AGE,
      algorithm: "HS256",
    }
  );

  res.cookie(JWT_COOKIE_NAME, token, {
    httpOnly: true,
    secure: IS_SECURE && IS_PROD,
    sameSite: "lax",
    maxAge: JWT_COOKIE_AGE,
  });
};
