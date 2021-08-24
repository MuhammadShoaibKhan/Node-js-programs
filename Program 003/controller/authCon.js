let authModel = require("../models/authschema");
const bcrypt = require("bcryptjs");



const SignUp = async(req, res) => {
    var checkUser = await authModel.findOne({ email: req.body.email });
    if (checkUser) {
        res
            .status(200)
            .send({ result: checkUser, message: "Email Already Registered" });
    } else {
        //   res.send({ message: "Yes you can Sign Up" })

        var hashPass = await bcrypt.hash(req.body.password, 12);
        //res.send({ pass: hashPass })

        //  res.send("Signup API")
        let userCreate = new authModel({
            email: req.body.email,
            password: hashPass,
        });
        userCreate
            .save()
            .then((response) => {
                //   console.log(response, 'response success')
                res
                    .status(200)
                    .send({ result: response, message: "User SignedUp Successfully" });
            })

        .catch((err) => {
            //  console.log(err, 'err');
            res.status(400).send({
                result: err.message,
                message: "Data not stored successfully",
            });
        });
    }
};

const SignIn = async(req, res) => {
    var checkUser = await authModel.findOne({ email: req.body.email });
    if (checkUser) {
        // res.send({ message: checkUser })
        var checkPass = await bcrypt.compare(req.body.password, checkUser.password);
        //  res.send(checkPass)
        if (checkPass) {
            res.status(200).send({ message: "You are signin successfully." });
        } else {
            res.status(403).send({ message: "Your password is incorrect" });
        }
    } else {
        res.status(200).send({ message: "No user is registered with this Email." });
    }
}

module.exports = { SignUp, SignIn };