import { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [schedules, setSchedules] = useState([]);
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://api-67sm.onrender.com/api/schedules`, {
        params: { departure, destination },
      });
      setSchedules(response.data); // Dữ liệu danh sách khung giờ
    } catch (error) {
      console.error(error);
      alert('Không tìm thấy chuyến nào phù hợp!');
    }
  };

  const handleScheduleSelect = (schedule) => {
    setSelectedSchedule(schedule); // Lưu thông tin chuyến đã chọn
  };

  return (
    <div>
      <h1>Đặt vé xe</h1>
      <div>
        <label>
          Điểm lên xe:
          <input
            type="text"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
        </label>
        <label>
          Điểm xuống xe:
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </label>
        <button onClick={handleSearch}>Tìm chuyến</button>
      </div>

      <div>
        {schedules.map((schedule) => (
          <div key={schedule.id}>
            <p>Khung giờ: {schedule.time}</p>
            <button onClick={() => handleScheduleSelect(schedule)}>
              Chọn khung giờ
            </button>
          </div>
        ))}
      </div>

      {selectedSchedule && (
        <div>
          <h2>Sơ đồ ghế cho chuyến {selectedSchedule.time}</h2>
          <SeatMap scheduleId={selectedSchedule.id} />
        </div>
      )}
    </div>
  );
};

export default Home;
