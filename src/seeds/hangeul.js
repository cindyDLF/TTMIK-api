import { getConnection, getRepository } from "typeorm";
import { Exercice, Thematic } from "../entities/index";
import { readFile } from "../utils/readFile";

const initHangeul = async () => {
  try {
    const thematicRepository = getRepository(Thematic);

    const thematicName = await thematicRepository.find({
      where: { name: "hangeul" },
      relations: ["exercice"]
    });

    const thematicHangeul = await getConnection()
      .createQueryBuilder()
      .select("thematic")
      .from(Thematic, "thematic")
      .leftJoinAndSelect("thematic.exercice", "exercice")
      .where("thematic.name = :name", { name: "hangeul" })
      .getOne();

    const isExist = thematicName.map(name => {
      if (name["name"] === "hangeul") {
        return true;
      } else {
        return false;
      }
    });

    if (isExist.length === 0 || isExist.includes(false)) {
      const hangeul = new Thematic();
      hangeul.name = "hangeul";
      await thematicRepository.save(hangeul);
    } else {
      console.log("key already exists");
    }

    const hangeulExercises = ["vowels", "consonants"];

    hangeulExercises.forEach(async name => {
      const exerciceEntity = await getConnection()
        .createQueryBuilder()
        .select("exercice")
        .from(Exercice, "exercice")
        .where("exercice.name = :name", { name })
        .getOne();

      if (exerciceEntity !== undefined) {
        if (exerciceEntity.name === name) {
          await getConnection()
            .createQueryBuilder()
            .delete()
            .from(Exercice)
            .where("name = :name", { name })
            .execute();
        }
      }

      const { info, data } = readFile(`../data/hangeul/${name}.json`);
      const {
        complete_point,
        step,
        point_per_step,
        access_level,
        exercice_type
      } = info;

      await getConnection()
        .createQueryBuilder()
        .insert()
        .into(Exercice)
        .values([
          {
            name,
            complete_point,
            step,
            point_per_step,
            data,
            access_level,
            exercice_type,
            thematic: thematicHangeul.id
          }
        ])
        .execute();
    });
  } catch (err) {
    console.log(err);
  }
};
export default initHangeul;
