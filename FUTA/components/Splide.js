import { useEffect, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import Image from 'next/image';

export default function SplideComponent() {
  const [height, setHeight] = useState('260px'); // Giá trị mặc định

  useEffect(() => {
    // Hàm cập nhật chiều cao dựa trên kích thước màn hình
    const updateHeight = () => {
      if (window.innerWidth < 480) {
        setHeight('150px'); // Chiều cao cho màn hình nhỏ hơn 480px
      } else if (window.innerWidth < 768) {
        setHeight('200px'); // Chiều cao cho màn hình nhỏ hơn 768px
      } else {
        setHeight('260px'); // Chiều cao mặc định
      }
    };

    // Gọi hàm cập nhật khi component được mount
    updateHeight();

    // Lắng nghe sự kiện resize để cập nhật chiều cao
    window.addEventListener('resize', updateHeight);

    // Dọn dẹp event listener khi component unmount
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <Splide
      options={{
        type: 'loop',
        autoplay: true,
        pauseOnHover: false,
        pauseOnFocus: false,
        height: height, // Sử dụng giá trị height từ state
      }}
    >
      <SplideSlide>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src="/image/napas.jpg"
            alt="Napas"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src="/image/Khaitruong.png"
            alt="Khai trương"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </SplideSlide>
      <SplideSlide>
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <Image
            src="/image/veTPHCM.png"
            alt="Vé TPHCM"
            fill
            style={{ objectFit: 'cover' }}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </SplideSlide>
    </Splide>
  );
}