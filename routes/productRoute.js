const express = require('express');
const { createProduct,
    getAProduct,
    getAllProduct
} = require('../controller/productController');
const router = express.Router();

router.post("/", createProduct);
router.get("/:id", getAProduct);
router.get("/", getAllProduct);

module.exports = router;