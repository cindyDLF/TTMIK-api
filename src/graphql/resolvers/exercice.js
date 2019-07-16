import { getExercices, getOneExercice } from "../../repositories";

export const exercice = {
  allExercices: () => getExercices(),
  exercice: name => getOneExercice(name)
};
