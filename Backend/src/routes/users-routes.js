import { Router } from "express";
import {
  //   ctrlGetUserById,
  //   ctrlLogin,
  ctrlCreateNewUser,
  ctrlDeleteUser,
  ctrlFindOneUser,
  ctrlListUsers,
  ctrlUpdateUser,
} from "../controllers/users-controllers.js";

//se crea el enrutador para /users
const usersRouter = Router();

usersRouter.post("/register", ctrlCreateNewUser);
usersRouter.get("/", ctrlListUsers);

usersRouter.get("/:userId", ctrlFindOneUser);
usersRouter.patch("/:userId", ctrlUpdateUser);
usersRouter.delete("/:userId", ctrlDeleteUser);
// usersRouter.post("/login", ctrlLogin);
// usersRouter.get("/:userId", ctrlGetUserById);

//se exporta el enrutador de /users
export { usersRouter };
