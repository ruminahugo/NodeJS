import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:3000'); // Kết nối Socket

const SeatMap = ({ scheduleId }) => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);

  useEffect(() => {
    // Lấy danh sách ghế từ API
    axios.get(`http://localhost:3000/api/schedule/${scheduleId}/seats`)
      .then((res) => setSeats(res.data))
      .catch((err) => console.error(err));

    // Lắng nghe cập nhật ghế qua Socket
    socket.on('seat-update', (updatedSeat) => {
      setSeats((prevSeats) =>
        prevSeats.map((seat) =>
          seat.id === updatedSeat.id ? updatedSeat : seat
        )
      );
    });

    return () => socket.off('seat-update'); // Dọn dẹp sự kiện khi component unmount
  }, [scheduleId]);

  const handleSeatClick = (seat) => {
    if (seat.isBooked || selectedSeats.includes(seat.id)) {
      return;
    }

    // Chọn ghế và gửi yêu cầu đặt tạm thời qua Socket
    setSelectedSeats((prev) => [...prev, seat.id]);
    socket.emit('select-seat', { scheduleId, seatId: seat.id });
  };

  const handleBookSeats = async () => {
    try {
      await axios.post(`http://localhost:3000/api/schedule/${scheduleId}/book`, {
        seatIds: selectedSeats,
      });
      alert('Đặt vé thành công!');
      setSelectedSeats([]);
    } catch (error) {
      console.error(error);
      alert('Đặt vé thất bại!');
    }
  };

  return (
    <div>
      <div className="seat-map">
        {seats.map((seat) => (
          <div
            key={seat.id}
            className={`seat ${
              seat.isBooked ? 'booked' : selectedSeats.includes(seat.id) ? 'selected' : 'available'
            }`}
            onClick={() => handleSeatClick(seat)}
          >
            {seat.number}
          </div>
        ))}
      </div>
      <button onClick={handleBookSeats}>Đặt vé</button>
      <style jsx>{`
        .seat-map {
          display: grid;
          grid-template-columns: repeat(4, 50px);
          gap: 10px;
        }
        .seat {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #000;
          border-radius: 5px;
          cursor: pointer;
        }
        .available {
          background-color: #fff;
        }
        .selected {
          background-color: #0f0;
        }
        .booked {
          background-color: #f00;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};

export default SeatMap;
