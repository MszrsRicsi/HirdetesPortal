const {Ad} = require("../database/Models/Ad");

exports.getAllAds = async () => {
    return await Ad.findAll();
}

exports.createAd = async (title, description, category, price, date, image) => {
    await Ad.create({
        title,
        description,
        category,
        price,
        date,
        image: image ? image : "noImage.svg"
    });
}

exports.modifyAd = async (id, title, description, category, price, date, image) => {
    await Ad.update({
        title,
        description,
        category,
        price,
        date,
        image: image ? image : "noImage.svg"
    },
    {where: {id}});
}

exports.deleteAd = async (id) => {
    await Ad.destroy({where: {id}});
}