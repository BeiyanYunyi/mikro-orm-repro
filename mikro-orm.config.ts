import { Options } from "@mikro-orm/core";
import { TsMorphMetadataProvider } from "@mikro-orm/reflection";
// import { Message } from "./src/entities/Message.js";

const config: Options = {
  entities: [],
  dbName: "orm.db",
  type: "better-sqlite",
  metadataProvider: TsMorphMetadataProvider,
};

export default config;
