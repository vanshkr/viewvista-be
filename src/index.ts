import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import { logger } from "./config/logger.js";
import "./dbUtils/db.js"; // Import to initialize the database connection
import User from "./models/user.js";
import Post from "./models/post.js";
import Like from "./models/like.js";
import Follower from "./models/follower.js";
import SavedPost from "./models/savedPost.js";
import Comment from "./models/comment.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());


// Routes

app.get('/test', (req, res) => {
  res.json({ message: "Test route works!" });
})
// app.use("/api/users", userRoutes);
// app.use("/api/posts", postRoutes);

// Error handling
// app.use(errorHandler);

// Start the server
User.sync({force:true}).then((result)=>console.log(result));
Post.sync({force:true}).then((result)=>console.log(result));
SavedPost.sync({force:true}).then((result)=>console.log(result));
Comment.sync({force:true}).then((result)=>console.log(result));
Like.sync({force:true}).then((result)=>console.log(result));
Follower.sync({force:true}).then((result)=>console.log(result));
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
