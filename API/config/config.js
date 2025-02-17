require("dotenv").config();

module.exports = {
    db: {
        name: process.env.DBNAME,
        host: process.env.DBHOST,
        user: process.env.DBUSER,
        pass: process.env.DBPASS,
        alter: process.env.DBALTER == "true" ? true : false,
        force: process.env.DBFORCE == "true" ? true : false
    },
    port: process.env.PORT,
    jtwSecret: process.env.JWT_SECRET
};