import { DataTypes, Model } from "sequelize";
import sequelize from "../dbUtils/db.js";
import User from "./user.js";
import Post from "./post.js";

interface LikeAttributes {
  userId: number;
  postId: number;
  // Add other Like properties...
}

class Like extends Model<LikeAttributes> implements LikeAttributes {
  public userId!: number;
  public postId!: number;
  // Add other Like properties...
}

Like.init(
  {
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
      primaryKey: true,
    },
    postId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: Post,
          key: "id",
        },
        primaryKey: true,
      },
    // Add other Like properties...
  },
  {
    sequelize,
    modelName: "like",
    freezeTableName: true,
  }
);

Like.belongsTo(User, { foreignKey: "userId" });
Like.belongsTo(Post, { foreignKey: "postId" });

export default Like;
