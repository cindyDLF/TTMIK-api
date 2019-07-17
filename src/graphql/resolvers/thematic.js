import { getThematics, getOneThematic } from "../../repositories";

export const thematic = {
  allThematic: () => getThematics(),
  thematic: name => getOneThematic({ name })
};
