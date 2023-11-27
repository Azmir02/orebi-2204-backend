const emailValidation = require("../helpers/emailValidation.js");
const User = require("../models/userModel.js");
const bcrypt = require("bcrypt");

let loginController = async (req, res) => {
  let { email, password } = req.body;

  if (!emailValidation(email)) {
    return res.status(400).send({
      error: "Please enter a valid email address",
    });
  } else if (!password) {
    return res.status(400).send({
      error: "Please enter a password",
    });
  } else {
    let isExistEmail = await User.find({ email });

    if (isExistEmail.length > 0) {
      bcrypt
        .compare(password, isExistEmail[0].password)
        .then(function (result) {
          if (result) {
            res.json({
              success: "Login Successfull ",
              firstName: isExistEmail.firstName,
              email: isExistEmail.email,
            });
          } else {
            return res.status(400).send({
              error: "password not match!",
            });
          }
        });
    } else {
      return res.status(400).send({
        error: "this email doesn't exist!",
      });
    }
  }

  console.log(email, password);
};
module.exports = loginController;
