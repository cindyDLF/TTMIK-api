import { buildSchema } from "graphql";

export const User = buildSchema(
  `
  scalar DateTime

  type User {
    id: Int!
    username: String!
    password: String!
    email: String!
    point: Int!
    level: Int!
    date_register: DateTime!
  }
  type Query {
   user(id: Int!): User!
   hello: String
   login(email: String!, password: String!): User!
}
type Mutation {
  addUser(username: String!,  password: String!, email: String!): String!
  updateEmail(id: Int!, email: String!): String!
  updatePassword(id: Int!, newPassword: String!): String!
  updateLevel(id: Int!, level: Int): String!
  updatePoint(id: Int!, point: Int): String!
}
`
);
