const { registerUserSchema } = require("../schemas/user.schema");
const { loginUserSchema } = require("../schemas/user.schema");
const { productSchema } = require("../schemas/product.schema");
const { storeSchema } = require("../schemas/store.schema");
const ExpressError = require("../utils/ErrorHandler");

module.exports.validateUserRegister = (req, res, next) => {
  const { error } = registerUserSchema.validate(req.body);

  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    return res
      .json(new ExpressError(msg, 400))
      .send(new ExpressError(msg, 400));
  }
  next();
};

module.exports.validateUserLogin = (req, res, next) => {
  const { error } = loginUserSchema.validate(req.body);

  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    return res
      .json(new ExpressError(msg, 400))
      .send(new ExpressError(msg, 400));
  }
  next();
};

module.exports.validateProduct = (req, res, next) => {
  const { error } = productSchema.validate(req.body);

  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    return res
      .json(new ExpressError(msg, 400))
      .send(new ExpressError(msg, 400));
  }
  next();
};
module.exports.validateStore = (req, res, next) => {
  const { error } = storeSchema.validate(req.body);

  if (error) {
    const msg = error.details.map((el) => el.message).join(",");
    return res
      .json(new ExpressError(msg, 400))
      .send(new ExpressError(msg, 400));
  }
  next();
};
