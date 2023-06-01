import React, { useState, useRef } from "react";
import Modal from "./Modal";
import './Doctor.css';

const Smyk = () => {


    const Doc = {
        id: 3,
        img: "../../IMG/IMG_20230323_214441.jpg",
        name: "Александр",
        surname: "Смык",
        patronimic: "Александрович",
        specialization: "Хирург-имплантолог",
        docs: [],
        education: [`- Диплом об окончании медицинской академии 2015 г.`, <br />, `
            - Сертификат об окончании интернатура - стоматолог общей практики 2016 г.`, <br />, `
            - Сертификат по хирургической стоматологии - 2017 г.`, <br />, `
            - 2010-2015 г Днепропетровская государственная медицинская академия.`],
        qualification: [`- Консультатирование, составление комплексных планов лечения.`, <br />, `
            - Удаление зубов.`, <br />, `
            - Лечение воспалительных заболеваний полости рта.`, <br />, `
            - Владение современными техниками в области
            дентальной имплантации (одномоментной и отсроченной-
            коррекции объёма тканей полости рта (костные и мягкотканные пластики), открытый/закрытый
            синус лифтинг, вертикальная/горизонтальная аугментация костного гребня, пластика десны).`, <br />, `
            - Протезирования на дентальных имплантатах`],
        about: ``,
    }

    const slides = ["../../DOC/Смык/IMG-20230321-WA0047.jpg", "../../DOC/Смык/IMG-20230321-WA0051.jpg"]

    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);
    const scrollContainerRef = useRef(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleOpenModal = (slide) => {
        setCurrentImage(slide);
        setOpen(true);
    };

    const handleCloseModal = () => {
        setCurrentImage(null);
        setOpen(false);
    };

    const handleWheelScroll = (event) => {
        const deltaY = event.deltaY;

        if (deltaY > 0) {
            // Scrolling down
            scrollContainerRef.current.scrollLeft += 20;
        } else {
            // Scrolling up
            scrollContainerRef.current.scrollLeft -= 20;
        }
    };

    const handleMoveLeft = () => {
        scrollContainerRef.current.scrollLeft -= 100;
        setScrollPosition(scrollContainerRef.current.scrollLeft);
    };

    const handleMoveRight = () => {
        scrollContainerRef.current.scrollLeft += 100;
        setScrollPosition(scrollContainerRef.current.scrollLeft);
    };

    return (
        <div>
            <div className="doctorContainer">
                <h1>
                    {Doc.surname} {Doc.name} {Doc.patronimic}
                </h1>
                <div className="DoctorCard">
                    <div>
                        <img src={Doc.img} alt={Doc.surname} />
                    </div>
                    <div>
                        <h2>Образование</h2>
                        <p>
                            {Doc.education}
                        </p>
                        <h2>Квалификация</h2>
                        <p>
                            {Doc.qualification}
                        </p>
                        <h2>О стоматологе</h2>
                        <p>
                            {Doc.about}
                        </p>
                        {
                            window.innerWidth > 900 ? (
                                <div>
                                    <div className="verticalSlider"
                                        onWheel={handleWheelScroll}
                                        ref={scrollContainerRef}
                                    >
                                        {slides.map((slide) => (
                                            <img
                                                src={slide}
                                                key={slide}
                                                onClick={() => handleOpenModal(slide)} // Open the modal on image click
                                                alt={slide}
                                            />
                                        ))}
                                    </div>
                                    <div className="sliderControls">
                                        <button onClick={handleMoveLeft}>&larr;</button>
                                        <button onClick={handleMoveRight}>&rarr;</button>
                                    </div>
                                </div>
                            ) : (
                                <div className="verticalSlider">
                                    {slides.map((slide) => (
                                        <img
                                            src={slide}
                                            key={slide}
                                            onClick={() => handleOpenModal(slide)} // Open the modal on image click
                                            alt={slide}
                                        />
                                    ))}
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>
            {open && (
                <Modal
                    image={currentImage}
                    handleClose={handleCloseModal}
                />
            )}
        </div>
    )
};

export default Smyk;