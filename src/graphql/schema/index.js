import path from "path";
import fs from "fs";
import { makeExecutableSchema, mergeSchemas } from "graphql-tools";
import { importSchema } from "graphql-import";

const schemaPathName = path.join(__dirname, "./types");

const schemas = [];
let files = [];

try {
  files = fs.readdirSync(schemaPathName);
} catch (err) {
  console.log("error _ %s", err.message);
}

files.forEach(fileName => {
  if (".graphql" === path.extname(fileName)) {
    schemas.push(
      makeExecutableSchema({
        typeDefs: importSchema(path.join(schemaPathName, fileName))
      })
    );
  }
});

const mergedSchema = mergeSchemas({
  schemas
});

export default mergedSchema;
