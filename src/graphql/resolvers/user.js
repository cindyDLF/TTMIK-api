import { comparePassword } from "../../utils/bcrypt";
import { validatorEmail } from "../../utils/validator";
import {
  findUserByEmail,
  updateUserEmail,
  createUser,
  user
} from "../../repositories";

const addUser = async ({ username, password, email }) => {
  const validateEmail = validatorEmail(email);
  if (validateEmail) {
    return createUser({ username, password, email });
  } else {
    throw new Error("email not valide");
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

export const resolversUser = {
  hello: () => "Hello, World",
  user,
  addUser,
  updateEmail,
  login
};
