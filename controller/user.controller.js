const user = require('../utils/user.json');

module.exports.getAllUser = (req, res) => {
    res.send(user);
}