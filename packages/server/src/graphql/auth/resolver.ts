import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import * as bcrypt from "bcrypt";
import { validate } from "class-validator";
import { Arg, Ctx, Mutation, Query, Resolver } from "type-graphql";
import { Context } from "../../context";
import { User } from "../../generated/typegraphql-prisma/models/User";
import { FieldsValidationError } from "../common/errors/FieldsValidationError";
import { BadCredentialsError } from "./errors/BadCredentialsError";
import { ExistingUserError } from "./errors/ExistingUserError";
import { NonExistingUserError } from "./errors/NonExistingUserError";
import { CredentialsInput } from "./inputs/CredentialsInput";
import { UserInput } from "./inputs/UserInput";
import { AuthResult } from "./results/AuthResult";
import { CreateUserResult } from "./results/CreateUserResult";
import { setJwtCookie } from "./setJwtCookie";

@Resolver()
class AuthResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() ctx: Context): Promise<User | null> {
    return ctx.user;
  }

  @Mutation(() => AuthResult)
  async login(
    @Arg("input") input: CredentialsInput,
    @Ctx() ctx: Context
  ): Promise<typeof AuthResult> {
    const errors = await validate(input);
    if (errors.length > 0) return FieldsValidationError.from(errors);

    const prismaUser = await ctx.prisma.user.findUnique({
      where: {
        email: input.email,
      },
    });

    if (!prismaUser) return new NonExistingUserError();

    const authenticated = await bcrypt.compare(
      input.password,
      prismaUser?.password
    );

    if (!authenticated) return new BadCredentialsError();

    setJwtCookie(prismaUser, ctx.res);
    return Object.assign(new User(), prismaUser);
  }

  @Mutation(() => CreateUserResult)
  async createUser(
    @Arg("input") input: UserInput,
    @Ctx() ctx: Context
  ): Promise<typeof CreateUserResult> {
    const errors = await validate(input);
    if (errors.length > 0) return FieldsValidationError.from(errors);

    const hashedPassword = await bcrypt.hash(input.password, 5);
    try {
      const prismaUser = await ctx.prisma.user.create({
        data: {
          ...input,
          password: hashedPassword,
        },
      });

      setJwtCookie(prismaUser, ctx.res);
      return Object.assign(new User(), prismaUser);
    } catch (err) {
      if (
        err instanceof PrismaClientKnownRequestError &&
        err.code === "P2002" // unique constraint failed
      ) {
        return new ExistingUserError();
      } else {
        throw err;
      }
    }
  }
}
