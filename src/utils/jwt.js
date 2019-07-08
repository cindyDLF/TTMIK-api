import * as jwt from "jsonwebtoken";

const config = {
  jwtSecret: "@QEGTUI"
};

export const generateJwt = (id, username) => {
  const newToken = jwt.sign({ id, username }, config.jwtSecret, {
    expiresIn: "1h"
  });
  console.log(newToken);
  return newToken;
};
