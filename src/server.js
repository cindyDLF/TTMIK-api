import express from "express";
import dotenv from "dotenv";
import { createConnection } from "typeorm";
import graphqlHTTP from "express-graphql";
import { BdConfig } from "../config";
import { User } from "./graphql/schema/User";
import { resolversUser } from "./graphql/resolvers/user";

const app = express();
dotenv.config();
const port = process.env.PORT;

const startServer = async () => {
  await createConnection(BdConfig)
    .then(async connection => {
      console.log("Connected to DB");
    })
    .catch(error => console.log("TypeORM connection error: ", error));

  app.use(
    "/graphql",
    graphqlHTTP({
      graphiql: true,
      schema: User,
      rootValue: resolversUser
    })
  );

  app.listen(port, () => console.log(`Server is listening on port ${port}`));
};

startServer();
