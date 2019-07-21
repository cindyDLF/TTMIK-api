import {
  getExercices,
  getExerciceByName,
  getExerciceById
} from "../../repositories";
import GraphQLJSON from "graphql-type-json";

export const exercice = {
  allExercices: () => getExercices(),
  exercice: name => getExerciceByName(name),
  exerciceById: id => getExerciceById(id)
};
