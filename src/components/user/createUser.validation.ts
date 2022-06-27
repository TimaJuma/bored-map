import Joi from "joi";
import { ValidationSchema } from "@core/interfaces/validationSchema";

const createUserValidation: ValidationSchema = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    accessibility: Joi.string().required(),
    price: Joi.string().required(),
  }),
};

export default createUserValidation;
