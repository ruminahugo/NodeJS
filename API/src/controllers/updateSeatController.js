const Seat = require('../models/Seat');

const updateSelected = async (scheduleId, seatNumber, dateSelecting) => {
  try {
    const data = new Seat(
      { schedule_id: scheduleId, seat_number: seatNumber, status: 'selected', date_booked: dateSelecting }
    );
    const updated = await data.save();

    if (!updated) {
      return { success: false, message: 'Không tìm thấy ghế để cập nhật!' };
    }

    return { success: true, message: 'Cập nhật thành công!', seat: updated };
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Lỗi server', error };
  }
};

const updateUnSelected = async (scheduleId, seatNumber, dateSelected) => {
  try {
    const deletedSeat = await Seat.findOneAndDelete({schedule_id: scheduleId, seat_number: seatNumber, date_booked: dateSelected});

    if (!deletedSeat) {
      return { success: false, message: 'Không tìm thấy ghế để xóa!' };
    }

    return { success: true, message: 'Ghế đã được hủy chọn thành công!', seat: deletedSeat};
  } catch (error) {
    console.error(error);
    return { success: false, message: 'Lỗi server', error };
  }
};

const onExitPage = async (data) => {
  try{
    const { scheduleId, seats } = data;
    if (!scheduleId || !seats || seats.length === 0) return;
    const deletedSeat = await Seat.deleteMany({ schedule_id: scheduleId, seat_number: { $in: seats } });
    if (!deletedSeat) {
      return { success: false, message: 'Không tìm thấy ghế để xóa!' };
    }
    return { success: true, message: 'Ghế đã được hủy chọn thành công!', seat: deletedSeat};
  } catch (error){
    return { success: false, message: 'Lỗi server', error };
  }
}


module.exports = { updateSelected, updateUnSelected, onExitPage };
