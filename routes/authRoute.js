const express = require('express');
const { createUser, loginUser, getAllUser, getaUser, deleteaUser } = require("../controller/userController");
const router = express.Router();
router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/all-users", getAllUser);
router.get("/:id", getaUser);
router.delete("/:id", deleteaUser);
module.exports = router;