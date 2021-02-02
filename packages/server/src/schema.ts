import "reflect-metadata";
import { buildSchema } from "type-graphql";
import * as path from "path";

const createSchema = async () => {
  return await buildSchema({
    resolvers: [path.join(__dirname, "graphql/*.resolver.[jt]s")],
    emitSchemaFile: path.join(__dirname, "generated/schema.graphql"),
    validate: false,
  });
};

export const schema = createSchema();
