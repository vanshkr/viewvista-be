import { DataTypes, Model } from "sequelize";
import sequelize from "../dbUtils/db.js";
import User from "./user.js";
import Post from "./post.js";

interface CommentAttributes {
  id: number;
  userId: number;
  postId: number;
  text: string;
  // Add other Comment properties...
}

class Comment extends Model<CommentAttributes> implements CommentAttributes {
  public id!: number;
  public userId!: number;
  public postId!: number;
  public text!: string;
  // Add other Comment properties...
}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
    },
    postId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: Post,
          key: "id",
        },
      },
    text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Add other Comment properties...
  },
  {
    sequelize,
    modelName: "comment",
    freezeTableName: true,
  }
);

Comment.belongsTo(User, { foreignKey: "userId" });
Comment.belongsTo(Post, { foreignKey: "postId" });

export default Comment;
