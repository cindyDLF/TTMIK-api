import { getConnection, getRepository } from "typeorm";
import { Exercice, Thematic } from "../entities/index";
import { readFile } from "../utils/readFile";
import { getExerciceByName } from "../repositories/index";

const initHangeul = async () => {
  try {
    const thematicRepository = getRepository(Thematic);

    const hangeul = new Thematic();
    hangeul.name = "hangeul";
    await thematicRepository.save(hangeul);

    const exerciceRepository = getRepository(Exercice);
    const hangeulExercises = ['vowels', 'consonants']

    hangeulExercises.forEach(async name => {
      const { info, data } = readFile(`../data/hangeul/${name}.json`);
      const { complete_point, step, point_per_step } = info

      const ex = new Exercice();
      ex.name = name;
      ex.complete_point = complete_point;
      ex.step = step;
      ex.point_per_step = point_per_step;
      ex.data = data
      ex.thematic = hangeul;

      await exerciceRepository.save(ex);
    })
  } catch (err) {
    console.log(err);
  }
};
export default initHangeul;
