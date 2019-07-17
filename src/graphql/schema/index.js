import { mergeSchemas } from "graphql-tools";
import { User } from "./User";
import { Thematic } from "./Thematic";
import { Exercice } from "./Exercice";

const schemas = mergeSchemas({ schemas: [User, Thematic, Exercice] });

export default schemas;
