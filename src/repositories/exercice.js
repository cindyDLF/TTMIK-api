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

export const getExerciceByName = async name => {
  try {
    return await getRepository(Exercice).findOne(name);
  } catch (err) {
    console.log(err);
  }
};

export const getExerciceById = async id => {
  try {
    return await getRepository(Exercice).findOne(id);
  } catch (err) {
    console.log(err);
  }
};
