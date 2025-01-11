const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/User');
const secretKey = process.env.JWT_SECRET;
const Register = async (req, res) => {
    const { username, password, email } = req.body;
  const isSameUsername = await User.findOne({ username});
  const isSameEmail = await User.findOne({ email });
  if (isSameUsername) {
    return res.status(401).json({ message: 'Tên đăng nhập đã được sử dụng!' });
  }
  if (isSameEmail){
    return res.status(401).json({ message: 'Email đã được đăng ký!'});
  }
  const user = new User({username, password, email});
  await user.save();
  return res.status(200).json({message: 'Đăng ký thành công!'});
};

module.exports = {
    Register
};
