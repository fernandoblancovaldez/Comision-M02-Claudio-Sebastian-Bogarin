import { Router } from "express";
import {
  ctrlCreatePost,
  ctrlGetAllPosts,
  ctrlGetPostById,
  ctrlUpdatePost,
} from "../controllers/posts-controllers.js";
import { createPostValidations } from "../validations/create-post-validation.js";
import { findPostValidation } from "../validations/find-post-validation.js";

import { applyValidations } from "../middlewares/apply-validations.js";
import { updatePostValidations } from "../validations/update-post-validation.js";

//se crea el enrutador para /posts
const postsRouter = Router();

//se definen los verbos HTTP para cada ruta con sus validadores, middlewares y controladores
//las siguientes rutas se desprenden de /posts
postsRouter.get("/", ctrlGetAllPosts);

postsRouter.get(
  "/:postId",
  findPostValidation,
  applyValidations,
  ctrlGetPostById
);

postsRouter.post("/", createPostValidations, applyValidations, ctrlCreatePost);

postsRouter.patch(
  "/:postId",
  updatePostValidations,
  applyValidations,
  ctrlUpdatePost
);

//se exporta el enrutador de /posts
export { postsRouter };
