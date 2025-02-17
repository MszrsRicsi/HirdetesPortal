const {User} = require("../database/Models/User");

exports.registerUser = async (name, email, address, password) => {
    if (await User.findOne({where: {email}}))
    {
        return {success: false, text: "Az e-mail már foglalt!"};
    }

    await User.create({
        name: name,
        email: email,
        address: address,
        password: password
    });

    return {success: true, text: "Sikeres regisztráció!"};
}

exports.loginUser = async (email, password) => {
    return await User.findOne({where: {email, password}});
}