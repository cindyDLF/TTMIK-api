import { mergeSchemas } from "graphql-tools";
import { User } from "./User";
import { Thematic } from "./Thematic";

const schemas = mergeSchemas({ schemas: [User, Thematic] });

export default schemas;
