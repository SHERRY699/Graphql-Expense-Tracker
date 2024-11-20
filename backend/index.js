// npm install @apollo/server express graphql cors
import http from "http";
import cors from "cors";
import express from "express";
import { ApolloServer } from "@apollo/server";
import userTypeDef from "./typeDefs/user.typeDefs.js";
import { resolvers } from "./resolvers/userResolver.js";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";

const app = express();

const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs: userTypeDef,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

await server.start();

app.use(
  "/",
  cors(),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  })
);

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/`);
