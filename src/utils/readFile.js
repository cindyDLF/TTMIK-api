import fs from "fs";
import path from "path";

export const readFile = pathFile => {
  const PATH = path.resolve(__dirname, pathFile);
  let data = fs.readFileSync(PATH);
  return JSON.parse(data);
};
