const Jwt = require("jsonwebtoken");
const jwtKey = "e-comm";

const VerifyToken = (req, resp, next) => {
    const token = req.headers.authorization;
    if (!token) {
        return resp.status(401).send({ result: "Unauthorized. Token missing." });
    }

    try {
        const decoded = Jwt.verify(token.split(" ")[1], jwtKey);
        req.user = decoded.user;
        next();
    } catch (error) {
        return resp.status(401).send({ result: "Unauthorized. Invalid token." });
    }
};

module.exports = VerifyToken;