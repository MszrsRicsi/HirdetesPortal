const {Category} = require("../database/Models/Category");

exports.createCategory = async (name) => {
    await Category.create({name: name});
}