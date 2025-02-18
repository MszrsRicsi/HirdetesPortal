const config = require('../config/config');
const jwt = require('jsonwebtoken');
const {sendMessage} = require("../utils");

exports.tokenCheck = (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token){
        return sendMessage(res, 400, false, "Hozzáférés megtagadva!");
    }

    try
    {
        req.user = jwt.verify(token, config.jwtSecret);
        next();
    }
    catch (error)
    {
        return sendMessage(res, 400, false, "Jelentkezz be újra!");
    }
}