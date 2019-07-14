import { getConnection, getRepository } from "typeorm";
import { hash } from "../utils/bcrypt";
import { User } from "../entities/index";

export const createUser = async ({ username, password, email }) => {
  try {
    const user = new User();
    user.username = username;
    user.password = await hash(password);
    user.email = email;
    user.level = 1;
    user.point = 0;
    user.date_register = new Date();

    await getRepository(User).save(user);
    return "successed to create user";
  } catch (err) {
    console.log(err);
  }
};

export const user = async id => {
  try {
    return await getRepository(User).findOne(id);
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
    return "points updated";
  } catch (err) {
    console.log(err);
  }
};
