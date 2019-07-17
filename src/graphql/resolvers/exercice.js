import { getExercices, getOneExercice } from "../../repositories";
import GraphQLJSON from "graphql-type-json";

export const exercice = {
  allExercices: () => getExercices(),
  exercice: name => getOneExercice(name)
};
