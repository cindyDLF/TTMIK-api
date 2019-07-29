import express from "express";
import dotenv from "dotenv";
import path from "path";
import fs from 'fs';
import { createConnection } from "typeorm";
import graphqlHTTP from "express-graphql";
import { BdConfig } from "../config";
import schemas from "./graphql/schema/index";
import resolvers from "./graphql/resolvers/index";
import { dirname } from "path";

const app = express();
dotenv.config();
const envPath = path.resolve(__dirname, "../.env") + ""

try {
  if (fs.existsSync(envPath)) {

  const port = process.env.PORT || 3000;

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
        schema: schemas,
        rootValue: resolvers
      })
    );

    const url = `http://localhost:${port}/graphql`;

    app.listen(port, () =>
      console.log(`Server is listening on port ${port} ==> go to ${url}`)
    );
  };
  startServer();
  } else {
    console.log("file .env not found, please create it before run server")
  }
} catch (error) {
  console.log(error);
} 
