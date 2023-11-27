const User = require("../models/userModel.js");

const otpMatch = async (req, res) => {
  let { email, randomOtp } = req.body;

  let findOtp = await User.find({ email });

  if (findOtp.length > 0) {
    await User.findOneAndUpdate(
      { email },
      { $unset: { randomOtp: "" } },
      { new: true }
    );
    res.send({ success: "otp matched!" });
  } else {
    res.send({ success: "otp not matched!" });
  }

  console.log(email, randomOtp);
};
module.exports = otpMatch;
