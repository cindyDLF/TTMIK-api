import { comparePassword, hash } from "../../utils/bcrypt";
import { validatorEmail } from "../../utils/validator";
import {
  findUserByEmail,
  updateUser,
  updateUserPassword,
  updateUserLevel,
  updateUserPoint,
  createUser,
  getUser,
  exerciceEnd
} from "../../repositories";

const addUser = async ({ username, password, email, avatar }) => {
  const validateEmail = validatorEmail(email);
  if (validateEmail) {
    return createUser({ username, password, email, avatar });
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

const updateUserInfo = async ({ id, username, email }) => {
  const validateEmail = validatorEmail(email);
  if (validateEmail) {
    return updateUser({ id, username, email });
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
  updateUserInfo,
  updatePassword,
  updateLevel: (id, level) => updateUserLevel(id, level),
  updatePoint: (id, point) => updateUserPoint(id, point)
};
