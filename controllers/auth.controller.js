const User = require("../models/users.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.register = async (req, res) => {
  const { username, email, password, confirmPassword } = req.body;
  try {
    if (password != confirmPassword) {
      return res.status(400).json({
        message: "Password and confPassword do not match",
      });
    }
    const hashPassword = await bcrypt.hash(password, 8);
    const user = new User({
      username: username,
      email: email,
      password: hashPassword,
    });

    await user.save();

    res.status(201).json({
      message: "OK",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(401).json({
        message: "user not found",
      });
    }
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(401).json({
        message: "password wrong",
      });
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.SECRET_KEY
    );

    res.status(200).json({
      data: user,
      token: token,
    });
  } catch (error) {
    console.log(error);
  }
};
