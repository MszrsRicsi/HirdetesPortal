const {sendMessage} = require("../utils");

module.exports = (err, req, res, next) => {
    console.log('Hiba történt: ' + err);
    
    const status = err.status || 500;
    const message = err.message || 'Hiba történt az adatbázis művelet során!';

    sendMessage(res, status, false, message);
}