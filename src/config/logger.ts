import winston, { Logger } from "winston";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logDir = path.join(__dirname, "../logs");

// Create the log directory if it does not exist
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

const logFormat = winston.format.combine(
  winston.format.colorize(),
  winston.format.timestamp(),
  winston.format.json()
);

const transports = [
//   new winston.transports.Console({
//     level: "info",
//     format: winston.format.combine(
//       winston.format.colorize(),
//       winston.format.simple()
//     ),
//   }),
  new winston.transports.File({
    level: "info",
    filename: path.join(logDir, "info.log"),
    format: logFormat,
  }),
];

const logger = winston.createLogger({
  transports: [...transports],
});


export { logger};
