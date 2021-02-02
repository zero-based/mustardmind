import { Ctx, Query, Resolver } from "type-graphql";
import { Context } from "../context";
import { User } from "../generated/typegraphql-prisma/models/User";

@Resolver()
class AuthResolver {
  @Query(() => User)
  async me(@Ctx() ctx: Context) {
    return ctx.prisma.user.create({
      data: {
        name: "MustardMind",
      },
    });
  }
}
