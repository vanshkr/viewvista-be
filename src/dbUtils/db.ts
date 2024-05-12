import { Sequelize } from "sequelize";
import { config } from "../config/config.js";
import {logger} from "../config/logger.js";

if (
  !config.db.database ||
  !config.db.username ||
  !config.db.password ||
  !config.db.host
) {
  throw new Error("Database configuration must not be undefined");
}

const sequelize = new Sequelize(config.db);

sequelize
  .authenticate()
  .then(() => {
    logger.info("Connected to PostgreSQL database");
  })
  .catch((err) => {
    logger.error("Failed to connect to PostgreSQL database", err);
  });

export default sequelize;
