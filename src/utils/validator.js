import { Validator } from "class-validator";

export const validatorEmail = email => {
  const validator = new Validator();
  return validator.isEmail(email);
};
