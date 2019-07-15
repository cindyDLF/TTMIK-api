import merge from "lodash/merge";
import { user } from "./user";
import { thematic } from "./thematic";

const resolvers = merge(user, thematic);

export default resolvers;
