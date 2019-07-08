import bcrypt from "bcrypt";

export const hash = async password => {
  const hashPassword = await bcrypt.hash(password, 10);
  if (!hashPassword) {
    console.log("error");
  } else {
    return hashPassword;
  }
};

export const comparePassword = async (password, hash) => {
  return await bcrypt.compareSync(password, hash);
};
