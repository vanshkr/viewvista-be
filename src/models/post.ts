import { DataTypes, Model } from "sequelize";
import sequelize from "../dbUtils/db.js";
import User from "./user.js";

interface PostAttributes {
  id: number;
  userId: number;
  caption: string;
  image: string;
  // Add other post properties...
}

class Post extends Model<PostAttributes> implements PostAttributes {
  public id!: number;
  public userId!: number;
  public caption!: string;
  public image!: string;
  // Add other post properties...
}

Post.init(
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
    caption: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // Add other post properties...
  },
  {
    sequelize,
    modelName: "Post",
  }
);

Post.belongsTo(User, { foreignKey: "userId" });

export default Post;
