import { extendType } from "nexus";

export const AuthQuery = extendType({
  type: "Query",
  definition(t) {
    t.field("me", {
      type: "User",
      resolve(_root, _args, ctx) {
        // TODO: Implement this correctly
        return ctx.prisma.user.create({
          data: {
            name: "MustardMind",
          },
        });
      },
    });
  },
});
