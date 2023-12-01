import { param, body } from "express-validator";

//se exporta un arreglo con las validaciones para el controlador de updatePost
export const updatePostValidations = [
  param("postId")
    .isNumeric()
    .withMessage("El postId debe ser numérico.")
    .toInt(),
  body("title")
    .optional()
    .isString()
    .withMessage("El Titulo debe ser un string."),
  body("description")
    .optional()
    .isString()
    .withMessage("La Description debe ser un string."),
  body("author")
    .optional()
    .isString()
    .withMessage("El Author debe ser un string."),
  body("comment")
    .optional()
    .isString()
    .withMessage("Los Comment deben ser un string."),
  body("imageURL").optional().isURL().withMessage("La image debe ser una URL."),
];
