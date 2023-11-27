const nodemailer = require("nodemailer");

let sendMail = async (email, verify, template) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "raihan.cit.bd@gmail.com",
      pass: "ujec egxs gpgl lzzp",
    },
  });

  const info = await transporter.sendMail({
    from: "raihan.cit.bd@gmail.com", // sender address
    to: email, // list of receivers
    subject: "verify your email", // Subject line
    html: template(verify), // html body
  });
};
module.exports = sendMail;
