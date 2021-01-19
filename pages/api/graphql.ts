import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { schema } from "src/schema";

const server = new ApolloServer({
  schema,
  tracing: process.env.NODE_ENV === "development",
});

const handler = server.createHandler({ path: "/api/graphql" });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default handler;
