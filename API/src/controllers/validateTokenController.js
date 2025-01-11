const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/User');
const secretKey = process.env.JWT_SECRET;
const validateToken = async (req, res) => {
    const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'No token provided' });

  try {
    const decoded = jwt.verify(token, secretKey);
    const user = await User.findById(decoded.id);
    if (user && user.token === token) {
      res.status(200).json({ message: 'Token valid' });      
    } else {
      res.status(401).json({ message: 'Invalid token' });      
    }
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = {
    validateToken
};
