const categoryService = require("../services/categoryService");
const {sendMessage} = require("../utils");

exports.getAll = async (req, res, next) => {
    try
    {
        res.status(200).json(await categoryService.getAllCategories());
    }
    catch (error)
    {
        next(error);
    }
}

exports.create = async (req, res, next) => {
    try
    {
        if (!req.body.name)
        {
            return sendMessage(res, 400, false, "Hiányzó adatok!");
        }

        const response = await categoryService.createCategory(req.body.name);

        return sendMessage(res, 201, true, response ? response : "Kategória létrehozva!");
    }
    catch (error)
    {
        next(error);
    }
}

exports.modify = async (req, res, next) => {
    try
    {
        if (!req.params.categoryID)
        {
            return sendMessage(res, 400, false, "Hiányzó adatok!");
        }

        if (!req.body.name)
        {
            return sendMessage(res, 400, false, "Hiányzó adatok!");
        }

        const response = await categoryService.modifyCategory(req.params.categoryID, req.body.name);

        return sendMessage(res, 200, true, response ? response : "Kategória módosítva!");
    }
    catch (error)
    {
        next(error);
    }
}

exports.delete = async (req, res, next) => {
    try
    {
        if (!req.params.categoryID)
        {
            return sendMessage(res, 400, false, "Hiányzó adatok!");
        }

        await categoryService.deleteCategory(req.params.categoryID);

        return sendMessage(res, 200, true, "Kategória törölve!");
    }
    catch (error)
    {
        next(error);
    }
}