const categoryService = require("../services/categoryService");
const {sendMessage} = require("../utils");

exports.create = async (req, res, next) => {
    try
    {
        if (!req.body.name)
        {
            return sendMessage(res, 400, false, "Hiányzó adatok!");
        }

        await categoryService.createCategory(req.body.name);

        return sendMessage(res, 201, true, "Kategória létrehozva!");
    }
    catch (error)
    {
        next(error);
    }
}