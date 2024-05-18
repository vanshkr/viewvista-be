import { DataTypes, Model } from "sequelize";
import sequelize from "../dbUtils/db.js";

interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
  // Add other user properties...
}

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  // Add other user properties...
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Add other user properties...
  },
  {
    sequelize,
    modelName: "user",
    freezeTableName: true,
  }
);

export default User;
