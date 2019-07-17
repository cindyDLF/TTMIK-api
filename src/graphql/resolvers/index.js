import merge from "lodash/merge";
import { user } from "./user";
import { thematic } from "./thematic";
import { exercice } from "./exercice";

const resolvers = merge(user, thematic, exercice);

export default resolvers;
