import { config } from "dotenv";

//se ejecuta dotenv para interpretar las variables de entorno declaradas dentro d .env
config();

//se exporta el objeto que reune las variales de entorno
export const env = {
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET || "secret",
  MONGO_URI: process.env.MONGO_URI,
};
