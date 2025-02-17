const {User} = require("../database/Models/User");

exports.registerUser = async (name, email, address, password) => {
    return await User.create({
        name: name,
        email: email,
        address: address,
        password: password
    });
}