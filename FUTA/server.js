const express = require('express');
const connectToDatabase = require('./index'); // Import hàm từ index.js

const app = express();
const PORT = 3000;

// Kết nối MongoDB khi server khởi động
connectToDatabase();

// Route mặc định
app.get('/', (req, res) => {
    res.send('Server đã kết nối MongoDB thành công!');
});

// Khởi chạy server
app.listen(PORT, () => {
    console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
