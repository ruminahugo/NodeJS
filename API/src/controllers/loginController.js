const jwt = require('jsonwebtoken');
require('dotenv').config();
const User = require('../models/User');
const secretKey = process.env.JWT_SECRET;
const Login = async (req, res) => {
    const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (!user) {
    return res.status(400);
  }
  const isMatch = await user.comparePassword(password);
  if(!isMatch){
    return res.status(400);
  }
  const token = jwt.sign({ id: user._id }, secretKey/*, { expiresIn: '1h' }*/);
  user.token = token;
  await user.save();
  res.status(200).json({ token });
}

module.exports = {
 Login
};
