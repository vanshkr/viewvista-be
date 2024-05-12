import { Options } from "sequelize"; // Import the Options type from Sequelize

interface DBConfig extends Options {
  username: string | undefined;
  password: string | undefined;
  database: string | undefined;
  host: string | undefined;
  dialect: "postgres" | "mysql" | "sqlite" | "mssql";
  dialectOptions: {
    ssl: {
      require: boolean;
      rejectUnauthorized: boolean;
    };
  };
}
export {DBConfig}