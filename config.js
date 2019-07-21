import { User, Thematic, Exercice, Progression } from "./src/entities/index";
import dotenv from "dotenv";

dotenv.config();

const isDev = process.env.NODE_ENV === "development";

export const BdConfig = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_NAME,
  entities: [User, Thematic, Exercice, Progression],
  synchronize: !isDev,
  logging: true,
  dropSchema: false
};
