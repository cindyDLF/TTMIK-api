import { User, Thematic } from "./src/entities/index";
import dotenv from "dotenv";

dotenv.config();

export const BdConfig = {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_NAME,
  entities: [User, Thematic],
  synchronize: true,
  logging: true,
  dropSchema: false
};
