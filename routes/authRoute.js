const express = require('express');
const { createUser,
    loginUser, getAllUser, getaUser,
    deleteaUser, updatedUser, blockUser,
    unLockUser, handleRefreshToken, logout,
    updatePassword, forgotPasswordToken,
    resetpassword, loginAdmin, getWishlist,
    saveAddress, userCart, getUserCart,
    emptyCart, applyCoupon, createOrder,
    getOrders, updateOrderStatus, getAllOrders, getOrderByUserId
} = require("../controller/userController");
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();
router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetpassword);
router.put("/update-order/:id", authMiddleware, isAdmin, updateOrderStatus);

router.put("/password", authMiddleware, updatePassword);
router.post("/login", loginUser);
router.post("/admin-login", loginAdmin);
router.post("/cart", authMiddleware, userCart);
router.post("/cart/applycoupon", authMiddleware, applyCoupon);
router.post("/cart/cash-order", authMiddleware, createOrder);
router.get("/all-users", getAllUser);
router.get("/get-orders", authMiddleware, getOrders);
router.get("/get-all-orders", authMiddleware, isAdmin, getAllOrders);
router.post("/getorderbyuser/:id", authMiddleware, isAdmin, getOrderByUserId);
router.get("/refresh", handleRefreshToken);
router.get("/logout", logout);
router.get("/wishlist", authMiddleware, getWishlist);
router.get("/cart", authMiddleware, getUserCart);

router.get("/:id", authMiddleware, isAdmin, getaUser);
router.delete("/empty-cart", authMiddleware, emptyCart);
router.delete("/:id", deleteaUser);

router.put("/edit-user", authMiddleware, updatedUser);
router.put("/save-address", authMiddleware, saveAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unlock-user/:id", authMiddleware, isAdmin, unLockUser);

module.exports = router;