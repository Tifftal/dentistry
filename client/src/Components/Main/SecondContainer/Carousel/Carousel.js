import React, { useState } from 'react';
import './Carousel.css';

const slides = [
  {
    id: 1,
    img: "../../IMG/DSC02687-2.jpg",
    name: "Бильбо",
    surname: "Бэггинс",
    vacancy: "Вор",
  },
  {
    id: 2,
    img: "../../IMG/DSC02747-2.jpg",
    name: "Гендальф",
    surname: "Серый",
    vacancy: "Колдун",
  },
  {
    id: 3,
    img: "../../IMG/DSC02705-2.jpg",
    name: "Леголас",
    surname: "Из леса",
    vacancy: "Стрелок",
  },
  {
    id: 4,
    img: "../../IMG/DSC02599-2.jpg",
    name: "Торин",
    surname: "Дубощит",
    vacancy: "Гном",
  },
  {
    id: 5,
    img: "../../IMG/DSC02705-2.jpg",
    name: "Голлум",
    surname: "Смеггл",
    vacancy: "Хоббит",
  }
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showPrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  const showNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  return (
    <div className="carousel">
      <div className="slides"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            className="slide"
            key={slide.id}
          >
            <img src={slide.img} alt={`Slide ${slide.id}`} />
            <p>{slide.name} {slide.surname}</p>
          </div>
        ))}
      </div>
      <div className="btnPlaceholder">
        <button className="prev" onClick={showPrevSlide}>
          «
        </button>
        <button className="next" onClick={showNextSlide}>
          »
        </button>
      </div>
    </div>
  );
};

export default Carousel;

