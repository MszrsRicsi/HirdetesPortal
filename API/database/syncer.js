const config = require("../config/config");
const {db} = require("./database");

const {User} = require("./Models/User");
const {Category} = require("./Models/Category");
const {Ad} = require("./Models/Ad");

const {UserAd} = require("./Models/Binders/userAds");
const {AdCategory} = require("./Models/Binders/adCategories");

User.hasMany(UserAd, {foreignKey: "userID"});
UserAd.belongsTo(User, {foreignKey: "userID", onDelete: "cascade"});

Ad.hasMany(UserAd, {foreignKey: "adID", onDelete: "cascade"})
UserAd.belongsTo(Ad, {foreignKey: "adID", onDelete: "cascade"});

Category.hasMany(AdCategory, {foreignKey: "categoryID"});
AdCategory.belongsTo(Category, {foreignKey: "categoryID", onDelete: "cascade"});

Ad.hasOne(AdCategory, {foreignKey: "adID"});
AdCategory.belongsTo(Ad, {foreignKey: "adID", onDelete: "cascade"});

db.sync({alter: config.db.alter, force: config.db.force}, () => {
    console.log("Database synced!");
})