const {db} = require("../../database");
const {DataTypes} = require('sequelize');

const UserAd = db.define("userAd",
{
    userID: {
        type: DataTypes.UUID,
        allowNull: false
    },
    adID: {
        type: DataTypes.UUID,
        allowNull: false
    }
});

module.exports = {UserAd};