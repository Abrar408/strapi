const Joi = require("joi");

const userCreateSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({}),
  body: Joi.object({
    firstName: Joi.string().trim().required(),
    lastName: Joi.string().trim().required(),
  }),
});

const userUpdateSchema = Joi.object({
  query: Joi.object({}),
  params: Joi.object({
    id: Joi.number().required(),
  }),
  body: Joi.object({
    firstName: Joi.string().trim().optional(),
    lastName: Joi.string().trim().optional(),
  }),
});

module.exports = { userCreateSchema, userUpdateSchema };
