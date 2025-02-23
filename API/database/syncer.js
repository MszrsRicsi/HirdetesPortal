const config = require("../config/config");
const {db} = require("./database");

const {User} = require("./Models/User");
const {Ad} = require("./Models/Ad");

const {UserAd} = require("./Models/Binders/userAds");

User.hasMany(UserAd, {foreignKey: "userID"});
UserAd.belongsTo(User, {foreignKey: "userID", onDelete: "cascade"});

Ad.hasOne(UserAd, {foreignKey: "adID", onDelete: "cascade"})
UserAd.belongsTo(Ad, {foreignKey: "adID", onDelete: "cascade"});

db.sync({alter: config.db.alter, force: config.db.force}, () => {
    console.log("Database synced!");
})