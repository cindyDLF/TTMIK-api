import { User, Thematic, Exercice, Progression } from "./src/entities/index";
import dotenv from "dotenv";

const isDev = process.env.NODE_ENV === "development";
if(isDev) {
  dotenv.config();
}

const regExp = /(.*):\/\/(.*):(.*)@(.*):(.*)\/(.*)/gm

let [, , username, password, host, s_port, database] = regExp.exec(process.env
  .DATABASE_URL)

const port = parseInt(s_port)

export const BdConfig = {
  type: 'postgres',
  host,
  port,
  username,
  password,
  database,
  entities: [User, Thematic, Exercice, Progression],
  synchronize: true,
  logging: true,
  dropSchema: false,
  ssl: !isDev
};
