const userServices = require("../services/userServices");
const CryptoJS = require("crypto-js");
const {sendMessage} = require("../utils");

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

        await userServices.registerUser(req.body.name, req.body.email, req.body.address, CryptoJS.SHA1(req.body.password).toString());

        sendMessage(res, 201, true, "Sikeres regisztráció!");
    }
    catch (error)
    {
        next(error);
    }
}