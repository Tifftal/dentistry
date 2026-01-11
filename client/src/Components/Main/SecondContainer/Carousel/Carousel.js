import './Carousel.css';

import { useState } from 'react';

const slides = [
  // {
  //   id: 1,
  //   img: "../../IMG/DSC02687-2.jpg",
  //   name: "Еремеева",
  //   surname: "Екатерина",
  //   patronimic: "Романовна",
  //   vacancy: "Терапевт",
  // },
  {
    id: 2,
    img: "../../IMG/DSC02747-2.webp",
    name: "Таценко",
    surname: "Елена",
    patronimic: "Генадьевна",
    link: "Tacenko",
    vacancy: [`Врач общей практики `, <br />, `Кандидат медицинских наук`, <br />, `Терапевт, ортопед, ортодонт`],
  },
  {
    id: 3,
    img: "../../IMG/DSC02705-2.webp",
    name: "Куашева",
    surname: "Фатима",
    patronimic: "Магометовна",
    link: "Kuasheva",
    vacancy: [`Врач общей практики `, <br />, `Терапевт, детский стоматолог`],
  },
  {
    id: 4,
    img: "../../IMG/Мосесова А.С.webp",
    name: "Анжелика",
    surname: "Мосесова",
    patronimic: "Сержевна",
    link: "Mosesova",
    vacancy: [`Стоматолог-имплантолог`, <br />, `Стоматолог-хирург, Гнатолог`],
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
            <h5>{slide.name} {slide.surname} {slide.patronimic}</h5>
            <p>{slide.vacancy}</p>
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

