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

const {updateSelected, updateUnSelected, onExitPage} = require('./controllers/updateSeatController');

// Socket.IO logic
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Lắng nghe sự kiện chọn ghế
  socket.on("select-seat", async ({ scheduleId, seatNumber, dateSelecting }) => {
    const userId = socket.id; // ID của client
    
    // Phát thông tin đến các client khác
    socket.broadcast.emit("seat-selected", { scheduleId, seatNumber, status: "selected", selectedBy: userId, dateSelected: dateSelecting });
    await updateSelected(scheduleId, seatNumber, dateSelecting);
  });

  socket.on("unselect-seat", async ({ scheduleId, seatNumber, dateSelected }) => {
    const userId = socket.id; // ID của client
    
    // Phát thông tin đến các client khác
    socket.broadcast.emit("seat-unselected", { scheduleId, seatNumber, status: "available", dateUnSelected: dateSelected});
    await updateUnSelected(scheduleId, seatNumber, dateSelected);
  });
  
  socket.on("release-page", async (data) => {
    await onExitPage(data);
    socket.broadcast.emit("seat-on-exit", { scheduleId: data.scheduleId, seatNumbers: data.seats, status: 'available' });
  });


  // Lắng nghe sự kiện hủy ghế
  socket.on('deselect-seat', ({ scheduleId, seatNumber }) => {
    console.log(`Ghế ${seatNumber} bị bỏ chọn trên chuyến ${scheduleId}`);
    
    // Gửi trạng thái ghế trống tới tất cả người dùng khác
    socket.broadcast.emit('seat-deselected', { scheduleId, seatNumber });
  });

  // Xử lý ngắt kết nối
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3000;

// Lắng nghe trên server HTTP thay vì app
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
