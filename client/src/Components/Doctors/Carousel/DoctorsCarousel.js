import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
    img: "../../IMG/DSC02747-2.jpg",
    name: "Таценко",
    link: "Tacenko",
    surname: "Елена",
    patronimic: "Генадьевна",
    vacancy: "Ортодонт",
  },
  {
    id: 3,
    img: "../../IMG/IMG_20230323_214441.jpg",
    name: "Смык",
    link: "Smyk",
    surname: "Александр",
    patronimic: "Александрович",
    vacancy: "Хирург-имплантолог",
  },
  {
    id: 4,
    img: "../../IMG/DSC02599-2.jpg",
    link: "Eremeeva",
    name: "Еремеева",
    surname: "Екатерина",
    patronimic: "Романовна",
    vacancy: "Терапевт",
  },
  {
    id: 5,
    img: "../../IMG/DSC02705-2.jpg",
    link: "Kuasheva",
    name: "Куашева",
    surname: "Фатима",
    patronimic: "Магометовна",
    vacancy: "Терапевт",
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
        {slides?.map((slide) => (
          <Link to={`/doctors/doctor/${slide.link}`} key={slide.id} className="slide" style={{textDecoration: "none", color: "black"}}>
              <img src={slide.img} alt={`Slide ${slide.id}`} />
              <h5>{slide.name} {slide.surname} {slide.patronimic}</h5>
              <p>{slide.vacancy}</p>
          </Link>
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

