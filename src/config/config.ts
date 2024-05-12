import dotenv from "dotenv";
import { DBConfig } from "../types/dbConfig";
dotenv.config();

export const config = {
  port: process.env.PORT || 3000,
  db: {
    username: process.env.DB_USERNAME as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_NAME as string,
    host: process.env.DB_HOST as string,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  } as DBConfig,
};
