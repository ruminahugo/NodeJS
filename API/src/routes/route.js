const express = require('express');
const Route = require('../models/Routes');
const Schedule = require('../models/Schedule');
const Seat = require('../models/Seat');
const router = express.Router();

function formatTime(time){
  return time >= 0 && time < 9 ? `0${time}` : time;
}

function RestrictTime(startTime, duration){
  const hours = parseInt(duration[0]);
  const minutes = parseInt(duration[1]);
  const startHours = parseInt(startTime[0]);
  const startMinutes = parseInt(startTime[1]);
  let endHours = startHours + hours;
  let endMinutes = startMinutes + minutes;
  if (endMinutes >= 60){
    endMinutes -= 60;
    endHours += 1;
  }
  if (endHours >= 24){
    endHours -= 24;
  }
  return {
    endHours : formatTime(endHours),
    endMinutes: formatTime(endMinutes)
  };
}

router.get('/', async (req, res) => {
    const { departure, destination, dateBooked } = req.query;
    if (!departure || !destination) {
      return res.status(400).json({ message: 'Thiếu tham số departure hoặc destination' });
    }
    try {
      //Tìm id của tuyến.
      const route = await Route.findOne({ departure, destination, status: true }).select('_id duration price');
      if (!route) return res.status(404).json({ message: 'Không tìm thấy tuyến phù hợp!' });
    
      const duration = route.duration.split(':');
      const price = route.price;

      //Tìm tất cả chuyến dựa trên id tuyến
      const schedules = await Schedule.find({ route_id: route._id }).populate({
          path: 'seatLayoutId', 
          select: 'layoutName' // Chỉ lấy layoutName từ seatLayout
          })
        .lean(); // Dùng lean() để nhận kết quả JSON thuần túy;
      // Duyệt qua từng schedule để lấy danh sách ghế có date_booked
      for (const schedule of schedules) {
          const {endHours, endMinutes} = RestrictTime(schedule.time.split(':'), duration);
          const available = schedule.seatLayoutId.layoutName;
          const seats = await Seat.find({ schedule_id: schedule._id, date_booked: dateBooked}).countDocuments();
          schedule.available = available - seats; // Thêm trường available vào data từng chuyến
          schedule.duration = `${duration[0]} Giờ ${duration[1]} Phút`; // Thêm thời gian di chuyển cho từng chuyến như nhau.
          schedule.endTime = `${endHours}:${endMinutes}`;
          schedule.price = price;
        }
      //console.log(schedules[0]);
      return res.json(schedules);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Lỗi server' });
    }
  });
  
  module.exports = router;