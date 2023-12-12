const Joi = require("joi");

module.exports.registerUserSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.string().required(),
  gender: Joi.string(),
  dateOfBirth: Joi.string(),
  noPhone: Joi.string(),
  address: Joi.string(),
});

module.exports.loginUserSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});
