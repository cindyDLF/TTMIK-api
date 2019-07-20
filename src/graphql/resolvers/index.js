import merge from "lodash/merge";
import { user } from "./user";
import { thematic } from "./thematic";
import { exercice } from "./exercice";
import { progression } from "./progression";

const resolvers = merge(user, thematic, exercice, progression);

export default resolvers;
