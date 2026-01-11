import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const advs = [
  { id: 1, img: "../../../IMG/DSC02613-2.jpg", name: "Комплексные методы лечения" },
  { id: 2, img: "../../../IMG/DSC02660-2.jpg", name: "Только высококвалифицрованные врачи" },
  { id: 3, img: "../../../IMG/DSC02655-2.jpg", name: "Контроль за качеством лекарств" },
];

const Carousel = () => {
  const swiperRef = useRef(null);

  return (
    <div className="advCarousel">
      <div className="advCarousel__outer">
        <div className="advCarousel__prev" onClick={() => swiperRef.current?.slidePrev()} aria-label="Предыдущий слайд">
          ❮
        </div>
        <div className="advCarousel__next" onClick={() => swiperRef.current?.slideNext()} aria-label="Следующий слайд">
          ❯
        </div>

        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Navigation, Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={16}
          loop={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".advCarousel__pagination",
          }}
          className="advCarousel__swiper"
        >
          {advs.map((adv) => (
            <SwiperSlide key={adv.id}>
              <div className="advCarousel__slide">
                <div className="advCarousel__imgBox">
                  <img src={adv.img} alt={adv.name} loading="lazy" />
                </div>
                <h5 className="advCarousel__title">{adv.name}</h5>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="advCarousel__pagination" />
      </div>
    </div>
  );
};

export default Carousel;
