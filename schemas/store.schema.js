const Joi = require("joi");

module.exports.storeSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
});
