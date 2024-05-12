import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import dotenv from "dotenv";
import { logger } from "./config/logger.js";
import "./dbUtils/db.js"; // Import to initialize the database connection

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
app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}`);
});
