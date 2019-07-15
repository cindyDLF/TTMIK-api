import { buildSchema } from "graphql";

export const Thematic = buildSchema(
  `
  scalar DateTime

  type Thematic {
    id: Int!
    name: String!
  }
  type Query {
   thematic: [Thematic]!
}
`
);
