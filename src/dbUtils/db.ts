import { Sequelize } from "sequelize";
import { config } from "../config/config.js";
import { logger } from "../config/logger.js";
import { User, Post } from "../models/index.js";

if (
  !config.db.database ||
  !config.db.username ||
  !config.db.password ||
  !config.db.host
) {
  throw new Error("Database configuration must not be undefined");
}

const customLogger = (msg:any) => {
  if (!msg.includes("SELECT 1+1 AS result")) {
    logger.debug(msg);
  }
};

const sequelize = new Sequelize({
  database: config.db.database,
  username: config.db.username,
  password: config.db.password,
  host: config.db.host,
  dialect: "postgres",
  dialectOptions: config.db.dialectOptions,
  logging: customLogger, // Set to `false` to disable logging entirely
  pool: {
    max: 5, // Maximum number of connections in the pool
    min: 0, // Minimum number of connections in the pool
    acquire: 30000, // Maximum time in milliseconds to acquire a connection before throwing an error
    idle: 10000, // Maximum time in milliseconds a connection can be idle before being released
    evict: 15000, // Time interval in milliseconds to check and evict idle connections
  },
});

sequelize
  .authenticate()
  .then(() => {
    logger.info("Connected to PostgreSQL database");
  })
  .catch((err) => {
    logger.error("Failed to connect to PostgreSQL database", err);
  });

sequelize
  .sync({ force: true })
  .then(() => {
    logger.info("Table synchronized successfully!");
  })
  .catch((error) => {
    logger.error("Unable to create table : ", error);
  });

export default sequelize;
