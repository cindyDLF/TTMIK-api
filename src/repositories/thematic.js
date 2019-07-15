import { getConnection, getRepository } from "typeorm";
import { Thematic } from "../entities/index";

export const getThematics = async () => {
  try {
    return await getRepository(Thematic).find();
  } catch (err) {
    console.log(err);
  }
};
