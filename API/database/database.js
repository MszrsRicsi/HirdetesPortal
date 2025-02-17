const config = require("../config/config");
const {Sequelize} = require("sequelize");

const db = new Sequelize(config.db.name, config.db.user, config.db.pass, {
    host: config.db.host,
    dialect: 'mysql',
    define: {
        timestamps: false
    }
});

module.exports = {db};