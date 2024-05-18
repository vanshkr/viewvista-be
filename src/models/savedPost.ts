import { DataTypes, Model } from "sequelize";
import sequelize from "../dbUtils/db.js";
import User from "./user.js";
import Post from "./post.js";

interface savedPostAttributes {
  userId: number;
  postId: number;
  // Add other savedPost properties...
}

class savedPost extends Model<savedPostAttributes> implements savedPostAttributes {
  public userId!: number;
  public postId!: number;
  // Add other savedPost properties...
}

savedPost.init(
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
    // Add other savedPost properties...
  },
  {
    sequelize,
    modelName: "savedPost",
    freezeTableName: true,
  }
);

savedPost.belongsTo(User, { foreignKey: "userId" });
savedPost.belongsTo(Post, { foreignKey: "postId" });

export default savedPost;
