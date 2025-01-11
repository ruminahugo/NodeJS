const mongoose = require('mongoose');
require('dotenv').config();

// Chuỗi kết nối MongoDB
const uri = process.env.MONGO_URI;

// Hàm kết nối tới MongoDB
async function connectToDatabase() {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log("Kết nối MongoDB thành công!");
        // Tạo schema
        const userSchema = new mongoose.Schema({
            name: String,
            age: Number,
            city: String,
        });

        // Tạo model
        const User = mongoose.model('User', userSchema, 'users');

        // Thêm dữ liệu mới
        const newData = [
            { name: "Nguyễn Văn B", age: 25, city: "Hồ Chí Minh" },
            { name: "Trần Thị C", age: 28, city: "Đà Nẵng" },
            { name: "Lê Văn D", age: 35, city: "Cần Thơ" },
        ];

        // Lưu vào database
        await User.insertMany(newData);
        console.log("Dữ liệu đã được thêm:", newData);
    } catch (error) {
        console.error("Lỗi kết nối MongoDB:", error);
    }
}

// Export hàm kết nối để dùng ở file khác
module.exports = connectToDatabase;
