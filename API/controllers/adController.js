const adService = require("../services/adService");
const {sendMessage} = require("../utils");

exports.getAll = async (req, res, next) => {
    try
    {
        res.status(200).json(await adService.getAllAds());
    }
    catch (error)
    {
        next(error);
    }
}

exports.create = async (req, res, next) => {
    try
    {
        if (!req.body.title || !req.body.description || !req.body.category || !req.body.price || !req.body.date)
        {
            return sendMessage(res, 400, false, "Hiányzó adatok!");
        }

        await adService.createAd( req.body.title, req.body.description, req.body.category, req.body.price, req.body.date, req.body.image ? req.body.image : null);

        return sendMessage(res, 201, true, "Hírdetés létrehozva!");
    }
    catch (error)
    {
        next(error);
    }
}

exports.modify = async (req, res, next) => {
    try
    {
        if (!req.params.adID)
        {
            return sendMessage(res, 400, false, "Hiányzó adatok!");
        }

        if (!req.body.title || !req.body.description || !req.body.category || !req.body.price || !req.body.date)
        {
            return sendMessage(res, 400, false, "Hiányzó adatok!");
        }

        await adService.modifyAd(req.params.adID, req.body.title, req.body.description, req.body.category, req.body.price, req.body.date, req.body.image ? req.body.image : null);

        return sendMessage(res, 200, true, "Hírdetés módosítva!");
    }
    catch (error)
    {
        next(error);
    }
}

exports.delete = async (req, res, next) => {
    try
    {
        if (!req.params.adID)
        {
            return sendMessage(res, 400, false, "Hiányzó adatok!");
        }

        await adService.deleteAd(req.params.adID);

        return sendMessage(res, 200, true, "Hírdetés törölve!");
    }
    catch (error)
    {
        next(error);
    }
}