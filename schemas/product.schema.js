const Joi = require("joi");

module.exports.productSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  price: Joi.number().min(0).required(),
  location: Joi.string().required(),
  description: Joi.string().required(),
});
