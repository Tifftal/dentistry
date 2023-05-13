// import React, { useState, useEffect } from 'react';
// import './Carousel.css';

// const Carousel = () => {
//     const [currentSlide, setCurrentSlide] = useState(1);

//     const handleNextSlide = () => {
//         setCurrentSlide(currentSlide === 4 ? 1 : currentSlide + 1);
//         const prev = document.querySelector(".previous");
//         const cur = document.querySelector(".current");
//         const next = document.querySelector(".next");

//         prev.classList.remove("previous");
//         prev.classList.add("next");
//         prev.style.display = "none";
//         // prev.style.transform = "translateX(400%)";
//         prev.style.display = "";

//         cur.classList.remove("current");
//         cur.classList.add("previous");
//         cur.style.display = "none";
//         // cur.style.transform = "translateX(-400%)";
//         cur.style.display = "";

//         next.classList.remove("next");
//         next.classList.add("current");
//         next.style.display = "none";
//         // next.style.transform = "translateX(200%)";
//         next.style.display = "";
//     };

//     const handlePrevSlide = () => {
//         setCurrentSlide(currentSlide === 1 ? 4 : currentSlide - 1);
//     };

//     const doctors = [
//         {
//             id: 1,
//             img: "../../IMG/DSC02687-2.jpg",
//             name: "Бильбо",
//             surname: "Бэггинс",
//             vacancy: "Вор",
//         },
//         {
//             id: 2,
//             img: "../../IMG/DSC02747-2.jpg",
//             name: "Гендальф",
//             surname: "Серый",
//             vacancy: "Колдун",
//         },
//         {
//             id: 3,
//             img: "../../IMG/DSC02705-2.jpg",
//             name: "Леголас",
//             surname: "Из леса",
//             vacancy: "Стрелок",
//         },
//         {
//             id: 4,
//             img: "../../IMG/DSC02599-2.jpg",
//             name: "Торин",
//             surname: "Дубощит",
//             vacancy: "Гном",
//         },
//         {
//             id: 5,
//             img: "../../IMG/DSC02705-2.jpg",
//             name: "Голлум",
//             surname: "Смеггл",
//             vacancy: "Хоббит",
//         }
//     ]

//     return (
//         <div className="secondContainer">
//             <div className="cardContainer">
//                 <div className="sliderPage previous">
//                     <img className="slideImg" src={doctors[currentSlide == 0 ? 4 : currentSlide - 1].img} />
//                     <h3>
//                         {doctors[currentSlide == 0 ? 4 : currentSlide - 1].name} {doctors[currentSlide == 0 ? 0 : currentSlide - 1].surname}
//                     </h3>
//                     <p>
//                         {doctors[currentSlide == 0 ? 4 : currentSlide - 1].vacancy}
//                     </p>
//                 </div>
//                 <div className="sliderPage current">
//                     <img className="slideImg" src={doctors[currentSlide].img} />
//                     <h3>
//                         {doctors[currentSlide].name} {doctors[currentSlide].surname}
//                     </h3>
//                     <p>
//                         {doctors[currentSlide].vacancy}
//                     </p>
//                 </div>
//                 <div className="sliderPage next">
//                     <img className="slideImg" src={doctors[currentSlide == 4 ? 0 : currentSlide + 1].img} />
//                     <h3>
//                         {doctors[currentSlide == 4 ? 0 : currentSlide + 1].name} {doctors[currentSlide == 4 ? 0 : currentSlide + 1].surname}
//                     </h3>
//                     <p>
//                         {doctors[currentSlide == 4 ? 0 : currentSlide + 1].vacancy}
//                     </p>
//                 </div>
//             </div>
//             <div className="sliderContainer">
//                 <button className="previousBtn" onClick={handlePrevSlide}>
//                     &#10094;
//                 </button>
//                 <button className="nextBtn" onClick={handleNextSlide}>
//                     &#10095;
//                 </button>
//             </div>
//         </div >
//     );
// };

// export default Carousel;

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
          </div>
        ))}
      </div>
      <button className="prev" onClick={showPrevSlide}>
        Previous
      </button>
      <button className="next" onClick={showNextSlide}>
        Next
      </button>
    </div>
  );
};

export default Carousel;

