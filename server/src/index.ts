import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
import helmet from "helmet";
import logger from "morgan";
import cookieParser from "cookie-parser";
import createServer from "./server";
import { authenticateJwt } from "./Utills/PassportJs/jwtStrategy";

const server = createServer();

server.express.use(cookieParser());
server.express.use(helmet());
server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },

  deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
  }
);
