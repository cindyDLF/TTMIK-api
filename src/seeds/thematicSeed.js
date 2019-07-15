import dataThematic from "../data/thematic.json";
import { createConnection, getConnection, getRepository } from "typeorm";
import { BdConfig } from "../../config";
import { Thematic } from "../entities/index";

const initThematicSeed = async () => {
  const conn = await createConnection(BdConfig);
  console.log("Database is connected");

  dataThematic.thematic.forEach(async item => {
    try {
      const thematic = await getConnection();
      const thematicRepository = await thematic.getRepository(Thematic);
      const thematicName = await thematicRepository.findOne({
        name: item.name
      });
      if (thematicName === undefined) {
        const thematic = new Thematic();
        thematic.name = item.name;
        await getRepository(Thematic).save(thematic);
      }
    } catch (err) {
      console.log(err);
    }
  });
};
export default initThematicSeed;
