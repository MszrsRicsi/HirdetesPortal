const {Ad} = require("../database/Models/Ad");

exports.getAllAds = async () => {
    return await Ad.findAll();
}

exports.createAd = async (title, description, price, date, image) => {
    await Ad.create({
        title,
        description,
        price,
        date,
        image: image ? image : "placeholder"
    });
}

exports.modifyAd = async (id, title, description, price, date, image) => {
    await Ad.update({
        title,
        description,
        price,
        date,
        image: image ? image : "placeholder"
    },
    {where: {id}});
}

exports.deleteAd = async (id) => {
    await Ad.destroy({where: {id}});
}