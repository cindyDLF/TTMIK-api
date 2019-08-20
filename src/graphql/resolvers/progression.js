import { updateProgression, getProgressionUser } from "../../repositories";

export const progression = {
  getProgression: ({ userId, exerciceId }) => getProgressionUser({ userId }),
  updateProgression: ({ userId, exerciceId, score }) =>
    updateProgression({ userId, exerciceId, score }),
};
