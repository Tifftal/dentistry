import React, { useState } from "react";

const advs = [
    {
        id: 1,
        img: "../../../IMG/DSC02613-2.jpg",
        name: "Комплексные методы лечения",
    },
    {
        id: 2,
        img: "../../../IMG/DSC02660-2.jpg",
        name: "Только высококвалифицрованные врачи"
    },
    {
        id: 3,
        img: "../../../IMG/DSC02655-2.jpg",
        name: "Контроль за качеством лекарств"
    },
]

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const showPrevSlide = () => {
        setCurrentSlide((currentSlide - 1 + advs.length) % advs.length);
    };

    const showNextSlide = () => {
        setCurrentSlide((currentSlide + 1) % advs.length);
    }


    return (
        <div className="carousel">
            <div className="slides"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {advs.map((adv) => (
                    <div
                        className="slide"
                        key={adv.id}
                    >
                        <img src={adv.img} alt={`Slide ${adv.id}`} />
                        <p>{adv.name}</p>
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
    )
}

export default Carousel;