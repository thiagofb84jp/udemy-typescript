import { body } from "express-validator";

export const movieCreateValidation = () => {
  return [
    body("title")
      .isString()
      .withMessage("O título do filme é obrigatório.")
      .isLength({ min: 5 })
      .withMessage("O título precisa ter no mínimo 5 caracteres."),
    body("rating").isNumeric().withMessage("A nota precisa ser um número."),
  ];
};
