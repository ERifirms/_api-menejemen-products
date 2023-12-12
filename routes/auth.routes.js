const express = require("express");
const authController = require("../controllers/auth.controller");
const { validateUserRegister } = require("../middlewares/validator");
const { validateUserLogin } = require("../middlewares/validator");
const wrapAsync = require("../utils/wrapAsync");

const router = express.Router();

router.post(
  "/register",
  validateUserRegister,
  wrapAsync(authController.register)
); // success
router.post("/login", validateUserLogin, wrapAsync(authController.login)); // success

module.exports = router;
