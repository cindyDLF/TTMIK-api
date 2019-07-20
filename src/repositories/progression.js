import { getRepository, getConnection } from "typeorm";
import { Progression, User } from "../entities/index";
import { getUser } from "./user";
import { getExerciceById } from "./exercice";

export const getProgressionUser = async ({ userId }) => {
  try {
    const user = await getUser(userId);
    const progression = await getRepository(Progression).find({
      relations: [
        "user",
        "user.progression",
        "exercice",
        "exercice.progression"
      ],
      where: {
        user: user
      }
    });
    return progression;
  } catch (err) {
    console.log(err);
  }
};

export const createProgression = async ({ user, exercice }) => {
  try {
    const progression = new Progression();
    progression.score = 0;
    progression.time = "0";
    progression.user = user;
    progression.exercice = exercice;

    await getRepository(Progression).save(progression);
    return "successed to create progression";
  } catch (err) {
    console.log(err);
  }
};

export const updateProgression = async ({
  exerciceId,
  userId,
  time,
  score
}) => {
  try {
    const user = await getUser(userId);
    const exercice = await getExerciceById(exerciceId);
    const progression = await getRepository(Progression).findOne({
      relations: [
        "user",
        "user.progression",
        "exercice",
        "exercice.progression"
      ],
      where: {
        user: user,
        exercice: exercice
      }
    });
    progression.score = score;
    progression.time = time;
    await getRepository(Progression).save(progression);
    return "progression updated";
  } catch (err) {
    console.log(err);
  }
};
