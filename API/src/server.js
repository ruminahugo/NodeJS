const http = require('http'); // Import http module
const app = require('./app');
const connectDb = require('./config/db');
require('dotenv').config();

connectDb();

// Tạo HTTP server từ app Express
const server = http.createServer(app);

// Khởi tạo socket.io và gắn vào server HTTP
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  socket.on('select-seat', ({ scheduleId, seatId }) => {
    // Cập nhật trạng thái ghế trong cơ sở dữ liệu
    const seat = updateSeatStatus(scheduleId, seatId, true);
    if (seat) {
      // Phát tín hiệu cập nhật trạng thái ghế cho tất cả client
      io.emit('seat-update', seat);

      // Tự động bỏ chọn sau 3 phút nếu không đặt
      setTimeout(() => {
        const timeoutSeat = updateSeatStatus(scheduleId, seatId, false);
        io.emit('seat-update', timeoutSeat);
      }, 3 * 60 * 1000);
    }
  });
});

const PORT = process.env.PORT || 3000;

// Lắng nghe trên server HTTP thay vì app
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
