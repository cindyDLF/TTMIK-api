import { getRepository } from "typeorm";
import { Exercice } from "../entities/index";

export const getExercices = async () => {
  try {
    const repository = getRepository(Exercice);
    return await repository.find({
      relations: ["thematic"]
    });
  } catch (err) {
    console.log(err);
  }
};

export const getOneExercice = async name => {
  try {
    return await getRepository(Exercice).findOne(name);
  } catch (err) {
    console.log(err);
  }
};
