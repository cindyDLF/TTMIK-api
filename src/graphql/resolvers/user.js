import { comparePassword, hash } from "../../utils/bcrypt";
import { validatorEmail } from "../../utils/validator";
import {
  findUserByEmail,
  updateUserEmail,
  updateUserPassword,
  updateUserLevel,
  updateUserPoint,
  createUser,
  getUser,
  exerciceEnd
} from "../../repositories";

const addUser = async ({ username, password, email }) => {
  const validateEmail = validatorEmail(email);
  if (validateEmail) {
    return createUser({ username, password, email });
  } else {
    throw new Error("email not valide");
  }
};

const login = async ({ email, password }) => {
  const user = await findUserByEmail({ email });
  if (user) {
    const checkPassword = await comparePassword(password, user.password);
    if (checkPassword) {
      return user;
    } else {
      throw new Error("incorrect password");
    }
  } else {
    throw new Error("incorrect email");
  }
};

const updateEmail = async ({ id, email }) => {
  const validateEmail = validatorEmail(email);
  if (validateEmail) {
    return updateUserEmail({ id, email });
  } else {
    throw new Error("email not valide");
  }
};

const updatePassword = async ({ id, newPassword }) => {
  const password = await hash(newPassword);
  return updateUserPassword({ id, password });
};

export const user = {
  hello: () => "Hello, World",
  getUser,
  addUser,
  login,
  updateEmail,
  updatePassword,
  updateLevel: (id, level) => updateUserLevel(id, level),
  updatePoint: (id, point) => updateUserPoint(id, point),
  exerciceEnd: (userId, point, exerciceId, score, time) =>
    exerciceEnd(userId, point, exerciceId, score, time)
};
