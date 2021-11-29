const jwt = require("jsonwebtoken");
const config = require("../config");

const verifyToken = async (req, res, next) => {
    const token = req.headers["Authorization"];
    if(!token) {
        return res.status(401).send({ auth: false, message: "No token provided" });
    }
    const decode = await jwt.verify(token, config.secret);
    req.userId = decode.id;

    next();
}

module.exports = verifyToken;