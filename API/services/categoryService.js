const {Category} = require("../database/Models/Category");

exports.getAllCategories = async () => {
    return await Category.findAll();
}

exports.createCategory = async (name) => {
    if (await Category.findOne({where: {name}}))
    {
        return "A kategória már létezik";
    }

    await Category.create({name: name});
}

exports.modifyCategory = async (id, name) => {
    if (await Category.findOne({where: {name}}) != null)
    {
        return "A kategória már létezik";
    }

    await Category.update(
        {name},
        {where: {id}}
    );
}

exports.deleteCategory = async (id) => {
    await Category.destroy({where: {id}});
}