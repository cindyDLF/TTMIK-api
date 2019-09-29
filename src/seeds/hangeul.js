import { getConnection, getRepository } from "typeorm";
import { Exercice, Thematic } from "../entities/index";
import { readFile } from "../utils/readFile";

const initThematic = async (thematic, arrExerciceHangeul) => {
  try {
    const thematicRepository = getRepository(Thematic);

    const thematicName = await thematicRepository.find({
      where: { name: thematic },
      relations: ["exercice"]
    });

    const thematicHangeul = await getConnection()
      .createQueryBuilder()
      .select("thematic")
      .from(Thematic, "thematic")
      .leftJoinAndSelect("thematic.exercice", "exercice")
      .where("thematic.name = :name", { name: thematic })
      .getOne();

    console.log("thematic ====>", thematicHangeul);

    const isExist = thematicName.map(name => {
      if (name["name"] === thematic) {
        return true;
      } else {
        return false;
      }
    });

    if (isExist.length === 0 || isExist.includes(false)) {
      const hangeul = new Thematic();
      hangeul.name = thematic;
      await thematicRepository.save(hangeul);
    } else {
      console.log("key already exists");
    }

    if (thematicHangeul !== undefined) {
      arrExerciceHangeul.forEach(async name => {
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

        const { info, data } = readFile(`../data/${thematic}/${name}.json`);
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
    }
  } catch (err) {
    console.log(err);
  }
};
export default initThematic;
