const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

async function userMiddleware(req, res, next) {
    console.log("in middleware");
    const token = req.headers.authorization;

    if (!token || !token.startsWith('Bearer ')) {
        return res.status(403).json({});
    }

    const jwtToken = token.split(" ")[1];

    try {
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);

        if (decodedValue.userId) {
            req.userId = decodedValue.userId;
            next();
        } else {
            res.status(401).json({
                msg: "You are not Authenticated"
            });
        }
    } catch (error) {
        console.error("Invalid token:", error);
        res.status(401).json({
            msg: "Invalid token"
        });
    }
}

module.exports = userMiddleware;
