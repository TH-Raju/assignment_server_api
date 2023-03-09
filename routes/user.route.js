const express = require("express");
const userController = require("../controller/user.controller");

const router = express.Router();

router.route("/").get(userController.getAllUser).post(userController.saveAUser)
router.route("/:id").get(userController.getAUser)
    .patch(userController.updateUser)
    .delete(userController.deleteUser)


module.exports = router;