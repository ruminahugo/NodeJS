import { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";
import indexcss from "../styles/index.module.css";
import Image from 'next/image';
import classNames from "classnames";

import LitePickerComponent from "../components/LitePicker";
import SplideComponent from "../components/Splide";

const socket = io("http://localhost:3000");
const userId = socket.id; // Lấy ID client

const Home = () => {
  const [departure, setDeparture] = useState([]);
  const [selectedDeparture, setSelectedDeparture] = useState("");
  const [destination, setDestination] = useState([]);
  const [selectedDestination, setSelectedDestination] = useState("");
  const [selectedDate, setSelectedDate] = useState(() => {
    // Khởi tạo state với ngày hiện tại
    const today = new Date();
    return `${String(today.getDate()).padStart(2, '0')}/${String(today.getMonth() + 1).padStart(2, '0')}/${today.getFullYear()}`;
  });
  const [routes, setRoutes] = useState([]);
  const [scheduleIds, setScheduleId] = useState("");
  const [seatLayout, setSeatLayout] = useState([]); // Lưu cả sơ đồ ghế và trạng thái
  const [selectedSeats, setSelectedSeats] = useState([]); // Ghế được chọn

  // Fetch điểm đi và điểm đến
  useEffect(() => {
    const fetchDeparture = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/getRoute/departure"
        );
        setDeparture(response.data);
        setSelectedDeparture(response.data[0]?.departure || "");
      } catch (error) {
        console.error("Error fetching departure:", error);
      }
    };

    const fetchDestination = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/getRoute/destination"
        );
        setDestination(response.data);
        setSelectedDestination(response.data[0]?.destination || "");
      } catch (error) {
        console.error("Error fetching destination:", error);
      }
    };

    fetchDeparture();
    fetchDestination();
  }, []);

  // Tìm tuyến đường
  const handleSearchRoutes = async () => {
    setRoutes([]);
    try {
      const response = await axios.get("http://localhost:3000/api/routes", {
        params: { departure: selectedDeparture, destination: selectedDestination, dateBooked: selectedDate },
      });
      setRoutes(response.data);
    } catch (error) {
      alert(error.message);
    }
  };

  // Xem sơ đồ ghế
  const handleViewSeats = async (scheduleId) => {
    setScheduleId(scheduleId);
    try {
      const response = await axios.get(`http://localhost:3000/api/getSeat/?scheduleId=${scheduleId}&dateBooked=${selectedDate}`);
      
      // Tạo mapping trạng thái ghế
      const seatStatusMap = response.data.reduce((map, seat) => {
        map[seat.seat_number] = { status: seat.status, selectedBy: seat.selectedBy || null };
        return map;
      }, {});
  
      const seat_Layout = await axios.get(`http://localhost:3000/api/getSeatLayout/${scheduleId}`);
      
      const updatedSeatLayout = seat_Layout.data.map((floor) => ({
        ...floor,
        seats: (floor.seats || []).map((seatNumber) => ({
          seatNumber,
          status: seatStatusMap[seatNumber]?.status || "available",
          selectedBy: seatStatusMap[seatNumber]?.selectedBy || null,
        })),
      }));
  
      setSeatLayout(updatedSeatLayout);
    } catch (error) {
      console.error("Lỗi tải sơ đồ ghế:", error?.response?.data || error.message);
    }
  };
  

  // Chọn ghế
  const handleSelectSeat = (seatNumber) => {
    const isSelected = selectedSeats.includes(seatNumber);
  
    setSeatLayout((prevLayout) =>
      prevLayout.map((floor) => ({
        ...floor,
        seats: floor.seats.map((seat) =>
          seat.seatNumber === seatNumber
            ? {
                ...seat,
                status: isSelected ? "available" : "selected",
                selectedBy: isSelected ? null : userId,
              }
            : seat
        ),
      }))
    );
  
    if (isSelected) {
      setSelectedSeats((prev) => prev.filter((s) => s !== seatNumber));
      socket.emit("unselect-seat", { scheduleId: scheduleIds, seatNumber });
    } else {
      setSelectedSeats((prev) => [...prev, seatNumber]);
      socket.emit("select-seat", { scheduleId: scheduleIds, seatNumber });
    }
  };
  

  // Lắng nghe cập nhật trạng thái ghế
  useEffect(() => {
    const handleSeatSelected = (data) => {
      const { scheduleId, seatNumber, status, selectedBy } = data;
      if (scheduleId === scheduleIds) {
        setSeatLayout((prevLayout) =>
          prevLayout.map((floor) => ({
            ...floor,
            seats: floor.seats.map((seat) =>
              seat.seatNumber === seatNumber
                ? { ...seat, status, selectedBy }
                : seat
            ),
          }))
        );
      }
    };
  
    const handleSeatUnSelected = (data) => {
      const { scheduleId, seatNumber } = data;
      if (scheduleId === scheduleIds) {
        setSeatLayout((prevLayout) =>
          prevLayout.map((floor) => ({
            ...floor,
            seats: floor.seats.map((seat) =>
              seat.seatNumber === seatNumber
                ? { ...seat, status: "available", selectedBy: null }
                : seat
            ),
          }))
        );
      }
    };

    const handleSeatOnOtherExit = (data) => {
      const { scheduleId, seatNumbers } = data;
      if (scheduleId === scheduleIds) {
        setSeatLayout((prevLayout) =>
          prevLayout.map((floor) => ({
            ...floor,
            seats: floor.seats.map((seat) =>
              seatNumbers.includes(seat.seatNumber)
                ? { ...seat, status: "available", selectedBy: null }
                : seat
            ),
          }))
        );
      }
    };
  
    socket.on("seat-selected", handleSeatSelected);
    socket.on("seat-unselected", handleSeatUnSelected);
    socket.on("seat-on-exit", handleSeatOnOtherExit);
  
    return () => {
      socket.off("seat-selected", handleSeatSelected);
      socket.off("seat-unselected", handleSeatUnSelected);
      socket.off("seat-on-exit", handleSeatOnOtherExit);
    };
  }, [scheduleIds]);
  
  useEffect(() => {
    const handleBeforeUnload = () => {
      if (selectedSeats.length > 0) {
        socket.emit("release-page", { scheduleId: scheduleIds, seats: selectedSeats });
      }
    };
  
    window.addEventListener("beforeunload", handleBeforeUnload);
    
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [selectedSeats, scheduleIds]);


  return (
    <>
      {/* Body Top */}
      <section className="pt-3 d-none" id="box-top">
        <div>Tổng đài đặt vé: <span style={{ color: 'orange' }}>1900.6067</span></div>
      </section>

      <section className="mb-2 pt-2">
        <div className="container">
          <div className="row g-4 align-items-center">
            {/* Hình ảnh quảng cáo */}
            <div className="col-md-6 px-1">
              <SplideComponent />
            </div>

            {/* Form mua vé */}
            <div className="col-md-6 px-1">
              <div className="p-1 border rounded">
                <h5 className="mb-3">
                  <i className="fa fa-shopping-cart"></i> Mua vé trực tuyến
                </h5>
                {/* Điểm đi, điểm đến */}
                <div className="row mb-3">
                  <div className="col-6">
                    <label htmlFor="go-adr" className="form-label">Địa điểm đi</label>
                    <select id="go-adr" className="form-select" value={selectedDeparture}
            onChange={(e) => setSelectedDeparture(e.target.value)}>
                      {departure.map((depart) => (
                        <option key={depart._id} value={depart.departure}>
                          {depart.departure}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-6">
                    <label htmlFor="arri-adr" className="form-label">Địa điểm đến</label>
                    <select id="arri-adr" className="form-select"value={selectedDestination}
            onChange={(e) => setSelectedDestination(e.target.value)}>
                      {destination.map((dest) => (
                        <option key={dest._id} value={dest.destination}>
                          {dest.destination}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Ngày đi & Quy định */}
                <div className="row mb-3">
                  <div className="col-6">
                    <label htmlFor="ngaydi" className="form-label">Ngày đi</label>
                    <LitePickerComponent onDateChange={setSelectedDate} />
                    {selectedDate && <p>Selected date: {selectedDate}</p>}
                  </div>
                  <div className="col-6 d-flex align-items-end">
                    <a href="#" className="btn btn-outline-secondary w-100">Quy định chung</a>
                  </div>
                </div>

                {/* Tìm vé & Hướng dẫn mua vé */}
                <div className="row">
                  <div className="col-6">
                    <button className="btn btn-primary w-100" onClick={handleSearchRoutes}>Tìm vé xe</button>
                  </div>
                  <div className="col-6">
                    <a href="#" className="btn btn-info w-100">Hướng dẫn mua vé</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6">
              {seatLayout.length > 0 && (
                <div className="row seat-layout">
                  {seatLayout.map((floor) => (
                    <div key={floor.floor} className="col-md-6">
                      <h3>{floor.floor}</h3>
                      <div className="seat-grid">
                        {floor.seats.map((seat) => (
                          <div
                            key={seat.seatNumber}
                            className={`seat ${
                              seat.status === "booked"
                                ? "booked"
                                : seat.status === "selected"
                                ? seat.selectedBy === userId
                                  ? "selected" // Nếu là ghế mình chọn
                                  : "not-allowed" // Nếu là ghế người khác chọn
                                : "available"
                            }`}
                            onClick={() =>
                              seat.status === "available" || seat.selectedBy === userId
                                ? handleSelectSeat(seat.seatNumber) // Chỉ bỏ chọn nếu là ghế mình chọn
                                : null
                            }
                          >
                            {seat.seatNumber}
                          </div>
                        
                        
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="col-md-6 px-1">
              {routes.length > 0 && (
                routes.map((schedule) => (
                <div className="card shadow-sm p-2 mt-2" key={schedule._id}>
                  <div className="row align-items-center">
                    <div className="col-md-3 text-center">
                        <h5 className="mb-0">{schedule.time}</h5>
                        <p className="text-muted small">{selectedDeparture}</p>
                    </div>
                    <div className={classNames(indexcss.flex,"col-md-6", "align-items-center", "text-center")}>
                      <Image src="https://futabus.vn/images/icons/pickup.svg" alt="pickup" layout="intrinsic" width={16} height={17} />
                      <span className={classNames(indexcss.border_dotted, "d-flex", "flex-grow-1", "border-bottom", "border-2")}></span>
                      <span className="mb-0">{schedule.duration} <br />
                        <span className="text-muted small">(Asian/Ho Chi Minh)</span>
                      </span>
                      <span className={classNames(indexcss.border_dotted, "d-flex", "flex-grow-1", "border-bottom", "border-2")}></span>
                      <Image src="https://futabus.vn/images/icons/station.svg" alt="station" layout="intrinsic" width={16} height={19} />            
                    </div>
                    <div className="col-md-3 text-center">
                        <h5 className="mb-0">{schedule.endTime}</h5>
                        <p className="text-muted small">{selectedDestination}</p>
                    </div>
                  </div>
                  <hr className={indexcss.hr} />
                  <div className="row align-items-center">
                    <div className="col-md-5">
                      <span className="badge bg-secondary">Limousine</span>
                      <span className="text-success"> • {schedule.available} chỗ trống</span>
                    </div>
                    <div className="col-md-3 text-end">
                      <strong className="text-danger">{schedule.price} đ</strong>
                    </div>
                    <div className="col-md-4 text-end">
                      <button className="btn btn-danger" onClick={() => handleViewSeats(schedule._id)}>Chọn chuyến</button>
                    </div>
                  </div>
                </div>
                ))
              )}           
                
              
            </div>
          </div>
        </div>
      </section>
    
    <div>

      

      

      <div>
        <h3>Ghế đã chọn:</h3>
        {selectedSeats.join(", ")}
      </div>
    </div>

  </>
  );
};
//Home.title = 'Đặt vé';
export default Home;
