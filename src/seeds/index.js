import { createConnection } from "typeorm";
import { BdConfig } from "../../config";

import initHangeul from "./hangeul";

(async () => {
  const connection = await createConnection(BdConfig);
  console.log("Database is connected");
  initHangeul();
})();
