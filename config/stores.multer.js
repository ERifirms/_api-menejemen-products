const multer = require("multer");
const path = require("path");
const ExpressError = require("../utils/ErrorHandler");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/LogoStore/");
  },

  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "_" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const allowedImageTypes = ["image/jpeg", "image/png"]; // Tambahkan tipe MIME yang diizinkan

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    if (allowedImageTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new ExpressError("Only JPEG and PNG images are allowed", 405));
    }
  },
});

module.exports = upload;
