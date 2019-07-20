import {
  getExercices,
  getOneExercice,
  getExerciceById
} from "../../repositories";
import GraphQLJSON from "graphql-type-json";

export const exercice = {
  allExercices: () => getExercices(),
  exercice: name => getOneExercice(name),
  exerciceById: id => getExerciceById(id)
};
