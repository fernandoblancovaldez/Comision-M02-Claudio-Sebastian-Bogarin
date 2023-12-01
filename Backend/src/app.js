import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

import { authenticationMiddleware } from "./middlewares/authentication-middleware.js";
import { authorizationMiddleware } from "./middlewares/authorization-middleware.js";

import { usersRouter } from "./routes/users-routes.js";
import { postsRouter } from "./routes/posts-routes.js";

import { startConnection } from "./settings/database.js";
import { env } from "./settings/config.js";

//se crea el servidor
const app = express();

//se aplican Middlewares comunes
app.use(morgan("dev"));
app.use(cors());
app.use(helmet());

// se aplica Middleware para interpretar JSON por body
app.use(express.json());

// se aplica Middleware para habilitar los formularios HTML
app.use(express.urlencoded({ extended: false }));

//se aplica Middleware para leer archivos estaticos de la carpeta "public"
app.use(express.static("public"));

//se aplica Middleware personalizado  ..
app.use((req, res, next) => {
  console.log("pasé por el Middleware personalizado");
  next();
});

//se accede al enrutador de la rama /posts
//se aplica guardMiddleware para proteger las rutas
app.use(
  "/posts",
  authenticationMiddleware,
  authorizationMiddleware,
  postsRouter
);

//se accede al enrutador de la rama /users
app.use("/users", usersRouter);

//se pone en escucha en el puerto designado
app.listen(env.PORT, async () => {
  await startConnection();
  console.log(`Server on port ${env.PORT}`);
});
