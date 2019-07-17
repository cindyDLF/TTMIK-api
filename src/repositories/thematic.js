import { getRepository } from "typeorm";
import { Thematic } from "../entities/index";

export const getThematics = async () => {
  try {
    const repository = getRepository(Thematic);
    return await repository.find({
      relations: ["exercice"]
    });
  } catch (err) {
    console.log(err);
  }
};

export const getOneThematic = async ({ name }) => {
  console.log("test");
  try {
    return await getRepository(Thematic).findOne(name, {
      relations: ["exercice"]
    });
  } catch (err) {
    console.log(err);
  }
};
