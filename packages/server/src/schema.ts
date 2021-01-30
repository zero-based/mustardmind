import { makeSchema } from "nexus";
import { nexusPrisma } from "nexus-plugin-prisma";
import * as types from "./graphql";
import * as path from "path";

export const schema = makeSchema({
  types,
  plugins: [nexusPrisma({ experimentalCRUD: true })],
  outputs: {
    typegen: path.join(
      __dirname,
      "../node_modules/@types/nexus-typegen/index.d.ts"
    ),
    schema: path.join(
      __dirname,
      "generated/schema.graphql"
    ),
  },
  contextType: {
    module: require.resolve("./context"),
    export: "Context",
  },
  sourceTypes: {
    modules: [
      {
        module: "@prisma/client",
        alias: "prisma",
      },
    ],
  },
});
