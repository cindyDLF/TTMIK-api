import express from "express";
import dotenv from "dotenv";
import { createConnection } from "typeorm";
import graphqlHTTP from "express-graphql";
import { BdConfig } from "../config";
import mergedSchema from "./graphql/schema/index";
import resolvers from "./graphql/resolvers/index";

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
      schema: mergedSchema,
      rootValue: resolvers
    })
  );

  const url = `http://localhost:${port}/graphql`;

  app.listen(port, () =>
    console.log(`Server is listening on port ${port} ==> go to ${url}`)
  );
};

startServer();
