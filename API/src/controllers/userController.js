const User = require('../models/User');

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find(); // Lấy tất cả người dùng
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch users', error });
  }
};

// Get user by ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error });
  }
};

// Create a new user
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const newUser = new User({ name, email, password });
    const savedUser = await newUser.save(); // Lưu vào MongoDB
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error });
  }
};

// Delete user by ID
const deleteUserById = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user) {
      res.json({ message: 'User deleted', user });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  deleteUserById,
};
