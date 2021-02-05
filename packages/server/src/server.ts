import { ApolloServer } from "apollo-server";
import { createContext } from "./context";
import { authenticate } from "./middleware/auth";
import { schema } from "./schema";

const main = async () => {
  const server = new ApolloServer({
    cors: {
      credentials: true,
      origin: [process.env.CLIENT_URL],
    },
    schema: await schema,
    context: ({ req, res }) => {
      const user = authenticate(req);
      return createContext(req, res, user);
    },
  });

  server.listen().then(({ url }) => {
    console.log(`⭐️ Server ready at: ${url}\n`);
  });
};

main().catch((err) => console.log(err));
