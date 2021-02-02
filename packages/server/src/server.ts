import { ApolloServer } from "apollo-server";
import { schema } from "./schema";
import { createContext } from "./context";

const main = async () => {
  const server = new ApolloServer({
    schema: await schema,
    context: createContext,
  });

  server.listen().then(({ url }) => {
    console.log(`⭐️ Server ready at: ${url}\n`);
  });
};

main().catch((err) => console.log(err));
