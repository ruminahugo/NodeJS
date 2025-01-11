const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  token: {
    type: String,
    required: false,
  }
});

// Mã hóa mật khẩu trước khi lưu vào database
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();  // Nếu mật khẩu không thay đổi, không cần mã hóa lại
  
  try {
    const salt = await bcrypt.genSalt(7);  // Tạo salt với độ dài là 10
    this.password = await bcrypt.hash(this.password, salt);  // Mã hóa mật khẩu với salt
    next();
  } catch (err) {
    next(err);
  }
  if (!this.isModified('token')) return next();
});

// Phương thức để kiểm tra mật khẩu khi đăng nhập
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
