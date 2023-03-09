const user = require('../utils/user.json');

module.exports.getAllUser = (req, res) => {
    res.send(user);
};

module.exports.getAUser = (req, res) => {
    const { id } = req.params;
    const foundUser = user.find(usr => usr.id == id);
    res.send(foundUser);
}