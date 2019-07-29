import { updateProgression, getProgressionUser } from "../../repositories";

export const progression = {
  getProgression: ({ userId, exerciceId }) => getProgressionUser({ userId }),
  updateProgression: ({ userId, exerciceId, score, time }) =>
    updateProgression({ userId, exerciceId, score, time }),
  hello: () => "hello"
};
