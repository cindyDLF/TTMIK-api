import { buildSchema } from "graphql";

export const Thematic = buildSchema(
  `
  type Exercice {
    id: Int!
    name: String!
    complete_point: Int!
    step: Int!
    point_per_step: Int!
    data: String!
    thematicId: Int
  }
  type Thematic {
    id: Int!
    name: String!
    exercice: [Exercice]
  }
  type Query {
   allThematic: [Thematic]!
   thematic(name: String!): Thematic
}
`
);
