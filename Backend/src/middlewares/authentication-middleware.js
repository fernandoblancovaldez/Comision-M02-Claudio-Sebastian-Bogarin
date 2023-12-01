import jwt from "jsonwebtoken";
import { UserModel } from "../models/user-model.js";

//se crea middleware de autenticacion para devolver Unauthorized cuando no se halle en headers la propiedad authorization
export const authenticationMiddleware = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.sendStatus(401);

  const token = authorization;
  try {
    const { id } = jwt.verify(token, "secret");

    const user = UserModel.findOne(id);

    req.user = user;

    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(401);
  }
};
