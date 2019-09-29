import { createConnection } from "typeorm";
import { BdConfig } from "../../config";

import initThematic from "./hangeul";

let thematicHangeul = "hangeul";
let arrExerciceHangeul = ["vowels", "consonants"];

let thematicVocabularies = "vocabularies";
let arrExerciceVocabularies = ["travel"];

(async () => {
  const connection = await createConnection(BdConfig);
  console.log("Database is connected");
  initThematic(thematicHangeul, arrExerciceHangeul);
  initThematic(thematicVocabularies, arrExerciceVocabularies);
})();
