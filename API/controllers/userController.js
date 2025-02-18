const config = require("../config/config");
const userService = require("../services/userService");
const CryptoJS = require("crypto-js");
const {sendMessage} = require("../utils");
const jwt = require("jsonwebtoken");

exports.registration = async (req, res, next) => {
    try
    {
        if (!req.body.name || !req.body.email || !req.body.address || !req.body.password || !req.body.confirm)
        {
            return sendMessage(res, 400, false, "Hiányzó adatok!");
        }

        if (req.body.password != req.body.confirm)
        {
            return sendMessage(res, 400, false, "A jelszavak nem egyeznek!");
        }

        // password regex

        const response = await userService.registerUser(req.body.name, req.body.email, req.body.address, CryptoJS.SHA1(req.body.password).toString());

        sendMessage(res, 201, response.success, response.text);
    }
    catch (error)
    {
        next(error);
    }
}

exports.login = async (req, res, next) => {
    try
    {
        if (!req.body.email || !req.body.password)
        {
            return sendMessage(res, 400, false, "Hiányzó adatok!");
        }

        console.log(req.body);

        const user = await userService.loginUser(req.body.email, CryptoJS.SHA1(req.body.password).toString());
        
        if (!user)
        {
            return sendMessage(res, 400, false, "Hibás bejelentkezési adatok!");
        }

        res.status(200).send({success: true, message: "Sikeres bejelentkezés", token: jwt.sign(user.dataValues, config.jwtSecret, {expiresIn: "2h"})})
    }
    catch (error)
    {
        next(error);
    }
}