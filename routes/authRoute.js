const express = require('express');
const { createUser,
    loginUser, getAllUser, getaUser,
    deleteaUser, updatedUser, blockUser,
    unLockUser, handleRefreshToken, logout,
    updatePassword
} = require("../controller/userController");
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();
router.post("/register", createUser);
router.put("/password", authMiddleware, updatePassword);
router.post("/login", loginUser);
router.get("/all-users", getAllUser);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.delete("/:id", deleteaUser);

router.put("/edit-user", authMiddleware, updatedUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unlock-user/:id", authMiddleware, isAdmin, unLockUser);

module.exports = router;