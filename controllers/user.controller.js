const User = require("../models/users.model");
const bcrypt = require("bcrypt");
const ExpressError = require("../utils/ErrorHandler");

const fs = require("fs");
module.exports.index = async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    message: users,
  });
};

module.exports.show = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.status(200).json({
    message: user,
  });
};

module.exports.update = async (req, res) => {
  const { user_id } = req.params;
  const { gender, dateOfBirth, noPhone, address } = req.body;

  const user = await User.findByIdAndUpdate(user_id, {
    gender: gender,
    dateOfBirth: dateOfBirth,
    noPhone: noPhone,
    address: address,
  });

  if (req.files && req.files.length > 0) {
    user.image.forEach((image) => {
      fs.unlink(image.url, (err) => new ExpressError(err));
    });

    const images = req.files.map((file) => ({
      url: file.path,
      filename: file.filename,
    }));

    user.image = images;
    await user.save();

    res.status(201).json({
      message: "update successfully",
      data: user,
    });
  }
};

// module.exports.destroy = async (req, res) => {
//   try {
//     const { user_id } = req.params;
//     const user = await User.findById(user_id);
//     if (user.image) {
//       user.image.forEach((image) => {
//         fs.unlinkSync(image.url, (err) => new ExpressError(err));
//       });
//     }
//     await user.deleteOne();

//     res.status(200).json({
//       message: "Deleted Successfully",
//     });
//   } catch (error) {
//     console.log(error);
//     console.log("failed to delete");
//   }
// };
