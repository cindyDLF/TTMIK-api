import path from "path";
import fs from "fs";
import { makeExecutableSchema, mergeSchemas } from "graphql-tools";
import { importSchema } from "graphql-import";

const filesPath = path.join(__dirname, "./types");

const types = [];
let files = [];

try {
  files = fs.readdirSync(filesPath);
} catch (err) {
  console.log("error _ %s", err.message);
}

files.forEach(fileName => {
  if (".graphql" === path.extname(fileName)) {
    types.push(
      makeExecutableSchema({
        typeDefs: importSchema(path.join(filesPath, fileName))
      })
    );
  }
});

const schemas = mergeSchemas({
  schemas: types
});

export default schemas;
