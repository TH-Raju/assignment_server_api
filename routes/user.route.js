const express = require("express");
const userController = require("../controller/user.controller");

const router = express.Router();

router.route("/").get(userController.getAllUser).post(userController.saveAUser).patch(userController.updateUser)
router.route("/:id").get(userController.getAUser);


module.exports = router;