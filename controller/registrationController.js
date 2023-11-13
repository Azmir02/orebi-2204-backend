const emailValidation = require("../helpers/emailValidation");
const nameValidation = require("../helpers/nameValidation");
const bcrypt = require('bcrypt');
const User = require("../models/userModel");

async function registrationController(req, res) {
    try {
        const { firstName, lastName, email, password, telephone, address, city, postCode, country, state } = req.body;

        if (!nameValidation(firstName)) {
            return res.status(400).send({
                error: "First Name Is Not Valid"
            })
        }
        if (!nameValidation(lastName)) {
            return res.status(400).send({
                error: "Last Name Is Not Valid"
            })
        }

        if (!emailValidation(email)) {
            return res.status(400).send({
                error: "Please enter a valid email address"
            })
        }

        let existingMail = await User.find({ email })

        if (existingMail.length > 0) {
            return res.status(400).send({
                error: "Email Already Exists"
            })
        }

        bcrypt.hash(password, 10, function (err, hash) {
            let userData = new User({
                firstName,
                lastName,
                email,
                password: hash,
                telephone,
                address,
                city,
                postCode,
                country,
                state
            })
            userData.save()
            res.json({
                success: "Registration Successfull",
                firstName: userData.firstName,
                lastName: userData.lastName,
                email: userData.email,
            })
        });

    } catch (error) {
        res.send(error.message)
    }
}

module.exports = registrationController;

