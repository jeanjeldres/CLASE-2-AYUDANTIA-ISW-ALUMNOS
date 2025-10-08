"user strict";
import Joi from "joi";

export const authValidation = Joi.object({
  email: Joi.string()
  .email()
  .required()
  .messages({
    "string.empty": "El correo electrónico no puede estar vacío",
    "string.email": "El correo electrónico debe ser válido",
    "any.required": "El correo electrónico es obligatorio",
  }),
  password: Joi.string()
  .min(6)
  .max(30)
  .required()
  .pattern(/^[a-zA-Z0-9]+$/)
  .messages({
    "string.empty": "La contraseña no puede estar vacía",
    "any.required": "La contraseña es obligatoria",
    "string.min": "La contraseña debe tener al menos {#limit} caracteres",
    "string.max": "La contraseña no debe exceder {#limit} caracteres",
    "string.pattern.base": "La contraseña solo puede contener letras y números",
    }),
    });
