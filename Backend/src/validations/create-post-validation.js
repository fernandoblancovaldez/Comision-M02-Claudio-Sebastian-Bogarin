import { body } from "express-validator";

export const createPostValidations = [
  body("title")
    .notEmpty()
    .withMessage("El Titulo es requerido.")
    .isString()
    .withMessage("El Titulo debe ser un string."),
  body("description")
    .notEmpty()
    .withMessage("La Description es requerida.")
    .isString()
    .withMessage("La Description debe ser un string."),
  body("author")
    .notEmpty()
    .withMessage("El Author es requerido.")
    .isString()
    .withMessage("El Author debe ser un string."),
  body("comment")
    .notEmpty()
    .withMessage("Los Comment son requeridos.")
    .isString()
    .withMessage("Los Comment deben ser un string."),
  body("imageURL").notEmpty().isURL().withMessage("La image debe ser una URL."),
];
