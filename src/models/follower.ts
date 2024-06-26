import { DataTypes, Model } from "sequelize";
import sequelize from "../dbUtils/db.js";
import User from "./user.js";

interface followAttributes {
  followerId: number;
  followingId: number;
  // Add other follow properties...
}

class follow extends Model<followAttributes> implements followAttributes {
  public followerId!: number;
  public followingId!: number;
  // Add other follow properties...
}

follow.init(
  {
    followerId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
      primaryKey: true,
    },
    followingId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: User,
          key: "id",
        },
        primaryKey: true,
      },
    // Add other follow properties...
  },
  {
    sequelize,
    modelName: "follow",
    freezeTableName: true,
  }
);

follow.belongsTo(User, { foreignKey: "followerId" });
follow.belongsTo(User, { foreignKey: "followingId" });

export default follow;
