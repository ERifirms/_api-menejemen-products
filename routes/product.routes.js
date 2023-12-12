const express = require("express");
const productController = require("../controllers/product.controller");
const { isAuth } = require("../middlewares/isAuth");
const upload = require("../config/multer");
const { validateProduct } = require("../middlewares/validator");
const wrapAsync = require("../utils/wrapAsync");
const router = express.Router();

router.get(
  "/products",
  //  isAuth,
  wrapAsync(productController.index)
); // success
router.post(
  "/store/:store_id/products",
  isAuth,
  upload.array("image", 4),
  validateProduct,
  wrapAsync(productController.store)
); // success
router.get("/products/:product_id", isAuth, productController.show); // success
router.put(
  "/stores/:store_id/products/:product_id",
  isAuth,
  upload.array("image", 4),
  validateProduct,
  wrapAsync(productController.update)
);

router.delete(
  "/products/:user_id",
  isAuth,
  upload.array("image", 4),
  wrapAsync(productController.destroy)
); // success

module.exports = router;
