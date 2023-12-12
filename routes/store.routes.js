const express = require("express");
const { isAuth } = require("../middlewares/isAuth");
const storeController = require("../controllers/store.controller");
const upload = require("../config/multer");
const { validateStore } = require("../middlewares/validator");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();

router.get(
  "/",
  //  isAuth,
  wrapAsync(storeController.index)
); // success
router.get("/:store_id", isAuth, wrapAsync(storeController.show)); // success
router.post(
  "/",
  isAuth,
  upload.array("image", 2),
  validateStore,
  wrapAsync(storeController.store)
); // success
router.put(
  "/:store_id",
  isAuth,
  upload.array("image", 2),
  validateStore,
  wrapAsync(storeController.update)
); // success
router.delete(
  "/:store_id",
  isAuth,
  upload.array("image", 2),
  wrapAsync(storeController.destroy)
);

module.exports = router;
