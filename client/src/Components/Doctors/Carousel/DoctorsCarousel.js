import "swiper/css";
import "swiper/css/pagination";
import "./Carousel.css";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Link } from "react-router-dom";
import { useRef } from "react";

const slides = [
  {
    id: 2,
    img: "../../IMG/DSC02747-2.jpg",
    name: "Таценко",
    surname: "Елена",
    patronimic: "Генадьевна",
    link: "Tacenko",
    vacancy: (
      <>
        Врач общей практики <br />
        Кандидат медицинских наук <br />
        Терапевт, ортопед, ортодонт
      </>
    ),
  },
  {
    id: 3,
    img: "../../IMG/DSC02705-2.jpg",
    name: "Куашева",
    surname: "Фатима",
    patronimic: "Магометовна",
    link: "Kuasheva",
    vacancy: (
      <>
        Врач общей практики <br />
        Терапевт, детский стоматолог
      </>
    ),
  },
  {
    id: 4,
    img: "../../IMG/Мосесова А.С.jpg",
    name: "Анжелика",
    surname: "Мосесова",
    patronimic: "Сержевна",
    link: "Mosesova",
    vacancy: (
      <>
        Стоматолог-имплантолог <br />
        Стоматолог-хирург, Гнатолог
      </>
    ),
  },
];

const Carousel = () => {
  const swiperRef = useRef(null);

  return (
    <>
    <br/>
      <div className="doctorsCarousel">
        {/* кастомные стрелки */}
        <button
          className="dc-prev"
          type="button"
          aria-label="Предыдущий слайд"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          ❮
        </button>

        <button
          className="dc-next"
          type="button"
          aria-label="Следующий слайд"
          onClick={() => swiperRef.current?.slideNext()}
        >
          ❯
        </button>

        <Swiper
          onBeforeInit={(swiper) => (swiperRef.current = swiper)}
          modules={[Pagination, Autoplay]}
          slidesPerView={1}
          spaceBetween={24}
          loop
          autoplay={{
            delay: 8000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".dc-pagination",
          }}
          className="dc-swiper"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Link
                to={`/doctors/${slide.link}`}
                className="dc-slide"
                style={{ textDecoration: "none", color: "black" }}
              >
                <div className="dc-imgBox">
                  <img src={slide.img} alt={`${slide.name} ${slide.surname}`} />
                </div>

                <h5 className="dc-title">
                  {slide.name} {slide.surname} {slide.patronimic}
                </h5>

                <p className="dc-text">{slide.vacancy}</p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* точки */}
        <div className="dc-pagination" />
      </div>
    </>
  );
};

export default Carousel;
