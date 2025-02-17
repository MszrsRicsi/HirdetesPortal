const {db} = require("../database");
const {DataTypes} = require('sequelize');

const Category = db.define("categorie",
{
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(40),
        allowNull: false
    }
});

module.exports = {Category};