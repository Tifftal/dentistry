import 'swiper/css';
import './Carousel.css';

import { Autoplay, Navigation } from 'swiper/modules';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const slides = [
  {
    id: 2,
    img: "../../IMG/DSC02747-2.webp",
    name: "Таценко Елена Генадьевна",
    vacancy: [`Врач общей практики `, <br />, `Кандидат медицинских наук`, <br />, `Терапевт, ортопед, ортодонт`],
  },
  {
    id: 3,
    img: "../../IMG/DSC02705-2.webp",
    name: "Куашева Фатима Магометовна",
    vacancy: [`Врач общей практики `, <br />, `Терапевт, детский стоматолог`],
  },
  {
    id: 4,
    img: "../../IMG/Мосесова А.С.webp",
    name: "Анжелика Мосесова Сержевна",
    vacancy: [`Стоматолог-имплантолог`, <br />, `Стоматолог-хирург, Гнатолог`],
  }
];

const Carousel = () => {
  const swiperRef = useRef(null);

  return (
    <div className="carousel-container">
      {/* Стрелочки вынесены наружу для точного позиционирования */}
      <div className="carousel-prev" onClick={() => swiperRef.current?.slidePrev()}>❮</div>
      <div className="carousel-next" onClick={() => swiperRef.current?.slideNext()}>❯</div>

      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-item">
              <div className="slide-img-wrapper">
                <img src={slide.img} alt={slide.name} loading="lazy" />
              </div>
              <h5>{slide.name}</h5>
              <p className="vacancy-text">{slide.vacancy}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;