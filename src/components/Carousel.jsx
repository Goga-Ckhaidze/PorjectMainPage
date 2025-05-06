import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Carousel.css'

const Carousel = () => {
  const slides = Array.from({ length: 8 }, (_, i) => `Slide ${i + 1}`);

  return (
    <div className="carousel-container">
      <button id="prevBtn" className="nav-button">‹</button>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: '#prevBtn',
          nextEl: '#nextBtn',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        slidesPerView={3}
        spaceBetween={20}
        grabCursor={true}
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide">{slide}</div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button id="nextBtn" className="nav-button">›</button>
    </div>
  );
};

export default Carousel;