import { getConnection, getRepository } from "typeorm";
import { hash } from "../utils/bcrypt";
import { User } from "../entities/index";
import { createProgression, updateProgression } from "./progression";
import { getExercices } from "./exercice";

export const createUser = async ({ username, password, email, avatar }) => {
  try {
    const user = new User();
    user.username = username;
    user.password = await hash(password);
    user.email = email;
    user.level = 1;
    user.point = 0;
    user.avatar = avatar;
    user.date_register = new Date();

    await getRepository(User).save(user);
    const exercices = await getExercices();
    exercices.forEach(async exercice => {
      await createProgression({ user, exercice });
    });
    return "successed to create user";
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async id => {
  try {
    return await getRepository(User).findOne(id, {
      relations: ["progression", "progression.exercice"]
    });
  } catch (err) {
    console.log(err);
  }
};

export const findUserByEmail = async ({ email }) => {
  try {
    return await getConnection()
      .createQueryBuilder()
      .select("user")
      .from(User, "user")
      .leftJoinAndSelect("user.progression", "progression")
      .where("user.email = :email", { email })
      .getOne();
  } catch (err) {
    return console.log(err);
  }
};

export const updateUserEmail = async ({ id, email }) => {
  try {
    await getConnection()
      .createQueryBuilder()
      .update(User)
      .set({ email })
      .where("id = :id", { id })
      .execute();
    return "email updated";
  } catch (err) {
    console.log(err);
  }
};

export const updateUserPassword = async ({ id, password }) => {
  try {
    await getConnection()
      .createQueryBuilder()
      .update(User)
      .set({ password })
      .where("id = :id", { id })
      .execute();
    return "password updated";
  } catch (err) {
    console.log(err);
  }
};

export const updateUserLevel = async ({ id, level }) => {
  try {
    await getConnection()
      .createQueryBuilder()
      .update(User)
      .set({ level })
      .where("id = :id", { id })
      .execute();
    return "level updated";
  } catch (err) {
    console.log(err);
  }
};

export const updateUserPoint = async ({ id, point }) => {
  try {
    await getConnection()
      .createQueryBuilder()
      .update(User)
      .set({ point })
      .where("id = :id", { id })
      .execute();
    return "point updated";
  } catch (err) {
    console.log(err);
  }
};
