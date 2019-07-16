import { buildSchema } from "graphql";

export const Exercice = buildSchema(
  `
  type Thematic {
    id: Int!
    name: String!
    exercice: [Exercice]
  }

  type Exercice {
    id: Int!
    name: String!
    complete_point: Int!
    step: Int!
    point_per_step: Int!
    data: String!
    thematic: Thematic
  }
  type Query {
   allExercices: [Exercice]!
   exercice(name: String!): Exercice!
}
`
);
