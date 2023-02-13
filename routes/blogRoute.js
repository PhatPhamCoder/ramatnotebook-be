const express = require('express');
const router = express.Router();
const { createBlog, updateBlog, getBlog,
    getAllBlog, deleteBlog
} = require('../controller/blogController');
const { authMiddleware, isAdmin } = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, isAdmin, createBlog);
router.put('/:id', authMiddleware, isAdmin, updateBlog);
router.get('/:id', getBlog);
router.get('/', getAllBlog);
router.delete('/:id', authMiddleware, isAdmin, deleteBlog);


module.exports = router;