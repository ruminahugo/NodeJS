const express = require('express');
const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  deleteUserById,
} = require('../controllers/userController');

// Routes
router.get('/', getUsers);
router.get('/:id', getUserById);
router.post('/', createUser);
router.delete('/:id', deleteUserById);

module.exports = router;
