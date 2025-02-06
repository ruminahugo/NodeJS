// pages/schedule/[scheduleId].js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import io from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:3000');

const ScheduleSeats = () => {
  const router = useRouter();
  const { scheduleId } = router.query;

  const [seats, setSeats] = useState([]);

  useEffect(() => {
    if (!scheduleId) return;

    // Lấy sơ đồ ghế từ backend
    const fetchSeats = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/schedules/seats/${scheduleId}`
        );
        setSeats(response.data);
      } catch (error) {
        console.error('Lỗi khi tải sơ đồ ghế:', error);
      }
    };

    fetchSeats();

    // Lắng nghe sự kiện từ Socket.IO
    socket.on('seat-selected', ({ scheduleId: id, seatNumber }) => {
      if (id === scheduleId) {
        setSeats((prev) =>
          prev.map((seat) =>
            seat.seat_number === seatNumber ? { ...seat, isBooked: true } : seat
          )
        );
      }
    });

    socket.on('seat-deselected', ({ scheduleId: id, seatNumber }) => {
      if (id === scheduleId) {
        setSeats((prev) =>
          prev.map((seat) =>
            seat.seat_number === seatNumber ? { ...seat, isBooked: false } : seat
          )
        );
      }
    });

    return () => {
      socket.off('seat-selected');
      socket.off('seat-deselected');
    };
  }, [scheduleId]);

  // Xử lý chọn/bỏ chọn ghế
  const handleSelectSeat = (seat) => {
    if (seat.isBooked) return; // Không cho chọn ghế đã đặt

    const updatedSeats = seats.map((s) =>
      s.seat_number === seat.seat_number
        ? { ...s, isBooked: !seat.isBooked }
        : s
    );
    setSeats(updatedSeats);

    if (!seat.isBooked) {
      socket.emit('select-seat', { scheduleId, seatNumber: seat.seat_number });
    } else {
      socket.emit('deselect-seat', { scheduleId, seatNumber: seat.seat_number });
    }
  };

  return (
    <div>
      <h1>Sơ đồ ghế chuyến: {scheduleId}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', maxWidth: 300 }}>
        {seats.map((seat) => (
          <div
            key={seat.seat_number}
            onClick={() => handleSelectSeat(seat)}
            style={{
              width: 50,
              height: 50,
              margin: 5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: seat.isBooked ? 'red' : 'green',
              color: 'white',
              cursor: 'pointer',
            }}
          >
            {seat.seat_number}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScheduleSeats;
