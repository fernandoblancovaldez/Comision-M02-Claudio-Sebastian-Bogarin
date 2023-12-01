import { param } from "express-validator";

export const findPostValidation = [
  param("postId")
    .isNumeric()
    .withMessage("El postId debe ser numérico.")
    .toInt(),
];
