const { Router } = require("express");
const router = Router();

const User = require("../models/userModel");
const verifyToken = require("../controllers/verifyToken");

const jwt = require("jsonwebtoken");
const config = require("../config");

router.post("/signup", (req, res) => {
    try {
        const { username, email, password } = req.body;

        const user = new User({
            username,
            email,
            password
        });

        user.password = await user.encryptPassword(password);
        await user.save();

        const token = jwt.sign(
            {
                id: user.id,
            },
            config.secret,
            {
                expiresIn: "1h"
            })
        res.status(200).json({ auth: true, token: token })

    } catch (error) {
        console.log(error);
        res.status(500).send("There was a problem signup");
    }
});

// router.post("/signin", (req, res) => {
//     try {
//         const user = await User.findOne({email: req.body.email})
//         if (!user) {
//             return res.status(404).send("The email doesn't exist");
//         }

//         const validPassword = await (req.body.password, user.password);
//         if (!validPassword) {
//             return res.status(401).send({auth: false, token:null})
//         }
//         const token = jwt.sign({ id: user._id }, config.secret, { expiresIn: "1h"})
//         res.status(200).json({ auth: true, token: token });
//     } catch (error) {
//         console.log(error)
//         res.status(500).send("There is a problem")
//     }
// })

// router.get("/logout", (req, res) => {
//     res.status(200).json({ auth: false, token: null })
// })