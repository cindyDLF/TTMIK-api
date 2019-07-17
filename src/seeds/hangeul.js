import { getConnection, getRepository } from "typeorm";
import { Exercice, Thematic } from "../entities/index";
import { readFile } from "../utils/readFile";

const initHangeul = async () => {
  try {
    const thematicRepository = getRepository(Thematic);

    const hangeul = new Thematic();
    hangeul.name = "hangeul";
    await thematicRepository.save(hangeul);

    const exerciceRepository = getRepository(Exercice);
    const vowel = new Exercice();
    vowel.name = "vowel";
    vowel.complete_point = 200;
    vowel.step = 10;
    vowel.point_per_step = 5;
    vowel.data = readFile("../data/hangeul/hangul-vowels.json");
    vowel.thematic = hangeul;
    await exerciceRepository.save(vowel);

    const consonant = new Exercice();
    consonant.name = "consonant";
    consonant.complete_point = 200;
    consonant.step = 10;
    consonant.point_per_step = 5;
    consonant.data = readFile("../data/hangeul/hangul-consonants.json");
    consonant.thematic = hangeul;
    await exerciceRepository.save(consonant);
  } catch (err) {
    console.log(err);
  }
};
export default initHangeul;
