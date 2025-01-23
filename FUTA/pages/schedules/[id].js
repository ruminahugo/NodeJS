import SeatMap from '../../components/SeatMap';
import { useRouter } from 'next/router';

const ScheduleDetails = () => {
  const router = useRouter();
  const { id } = router.query; // Lấy ID từ URL

  if (!id) return <p>Loading...</p>;

  return (
    <div>
      <h1>Sơ đồ ghế cho lịch trình {id}</h1>
      <SeatMap scheduleId={id} />
    </div>
  );
};

export default ScheduleDetails;
