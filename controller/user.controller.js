const user = require('../utils/user.json');

module.exports.getAllUser = (req, res) => {
    res.send(user);
};

module.exports.getAUser = (req, res) => {
    const { id } = req.params;
    const foundUser = user.find(usr => usr.id == id);
    res.send(foundUser);
}

module.exports.saveAUser = (req, res) => {
    user.push(req.body);
    res.send(user);
}

module.exports.updateUser = (req, res) => {
    const { id } = req.params;
    // const filter = { _id: id };
    const newUser = user.find(usr => usr.id === Number(id));
    newUser.id = id;
    newUser.gender = req.body.gender;
    newUser.name = req.body.name;
    newUser.contact = req.body.contact;
    newUser.address = req.body.address;
    newUser.photoUrl = req.body.photoUrl;
    res.send(newUser);

}

module.exports.deleteUser = (req, res) => {
    const { id } = req.params;
    const filter = { _id: id };

    newuser = user.filter(usr => usr.id != Number(id));
    res.send(newuser);
}