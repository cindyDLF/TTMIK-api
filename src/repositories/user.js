import { getConnection, getRepository } from "typeorm";
import { hash } from "../utils/bcrypt";
import { User } from "../entities/index";

export const findUserByEmail = async ({ email }) => {
  return await getConnection()
    .createQueryBuilder()
    .select("user")
    .from(User, "user")
    .where("user.email = :email", { email })
    .getOne();
};

export const updateUserEmail = async ({ id, email }) => {
  await getConnection()
    .createQueryBuilder()
    .update(User)
    .set({ email })
    .where("id = :id", { id })
    .execute();
  return await getRepository(User).findOne(id);
};

export const updateUserPassword = async ({ id, password }) => {
  await getConnection()
    .createQueryBuilder()
    .update(User)
    .set({ password })
    .where("id = :id", { id })
    .execute();
  return await getRepository(User).findOne(id);
};

export const createUser = async ({ username, password, email }) => {
  const user = new User();
  user.username = username;
  user.password = await hash(password);
  user.email = email;
  user.level = 1;
  user.point = 0;
  user.date_register = new Date();

  return await getRepository(User).save(user);
};

export const user = async id => {
  return await getRepository(User).findOne(id);
};
