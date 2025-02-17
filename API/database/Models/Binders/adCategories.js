const {db} = require("../../database");
const {DataTypes} = require('sequelize');

const AdCategory = db.define("adCategorie",
{
    adID: {
        type: DataTypes.UUID,
        allowNull: false
    },
    categoryID: {
        type: DataTypes.UUID,
        allowNull: false
    }
});

module.exports = {AdCategory};