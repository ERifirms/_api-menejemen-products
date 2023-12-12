const express = require("express");
const userController = require("../controllers/user.controller");
const { isAuth } = require("../middlewares/isAuth");
const upload = require("../config/multer");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();

router.get("/users/", isAuth, wrapAsync(userController.index));
router.get("/users/:id", isAuth, wrapAsync(userController.show));
router.put(
  "/users/:user_id",
  isAuth,
  upload.array("image", 1),
  wrapAsync(userController.update)
);
// router.delete("users/:user_id", isAuth, wrapAsync(userController.destroy));

module.exports = router;
