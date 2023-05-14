import React, { useState } from "react";
import "./aboutCarousel.css";

const advs = [
    {
        id: 1,
        img: "../../../IMG/sl1.jpg",
    },
    {
        id: 2,
        img: "../../../IMG/sl2.jpg",
    },
    {
        id: 3,
        img: "../../../IMG/sl3.jpg",
    },
    {
        id: 4,
        img: "../../../IMG/sl4.jpg",
    },
    {
        id: 5,
        img: "../../../IMG/sl5.jpg",
    },
    {
        id: 6,
        img: "../../../IMG/sl6.jpg",
    },
    {
        id: 7,
        img: "../../../IMG/sl7.jpg",
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
        <div className="carouselAbout">
            <div className="slidesAbout"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {advs.map((adv) => (
                    <div
                        className="slideAbout"
                        key={adv.id}
                    >
                        <img src={adv.img} alt={`Slide ${adv.id}`} />
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