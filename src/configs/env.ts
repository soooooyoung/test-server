import * as dotenv from "dotenv";
dotenv.config();
export const env = {
  app: {
    port: Number(process.env.PORT) || 9000,
  },
};
