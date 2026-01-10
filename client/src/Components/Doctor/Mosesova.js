import './Doctor.css';

import { useRef, useState } from "react";

import Modal from "./Modal";

const Mosesova = () => {


    const Doc = {
        id: 3,
        img: "../../IMG/Мосесова А.С.jpg",
        name: "Анжелика",
        surname: "Мосесова",
        patronimic: "Сержевна",
        specialization: [`Стоматолог-хирург`, <br />, `Гнатолог`, <br />, `Стоматолог-имплантолог`],
        link: "Mosesova",
        docs: [],
        education: [`2000-2005 стоматологический факультет КГМА`, <br />, `
            2005-2006 интернатура по стоматологии в КГМУ`, <br />, `
            2007 первичная переподготовка по хирургической стоматологии`, <br />, `
            2010 первичная переподготовка по детской стоматологии`, <br />, `
            2019 первичная переподготовка по ОЗЗ`, <br />, `
            2022 периодическая аккредитация по хирургической стоматологии`, <br />, `
            2025 периодическая аккредитация по ОЗЗ`, <br />],
        qualification: [`2012, 2017 повышение квалификации по хирургической стоматологии`, <br />],
        about: [`- Владеет сложными методиками работы с костной тканью, имплантацией , синус-лифтингом, пластикой мягких тканей, все виды удаления, лечение заболеваний ВНЧС.`, <br />,
            `- Врач хирург-стоматолог, специалист в области гнатологии и прикуса.`, <br />,
            `- Врач высшей категории.`, <br />,
            `- Преподаватель детской стоматологии, КУБГМУ.`, <br />,
            `- Стаж более 20 лет.`, <br />,],
    }

    const slides = ["../../DOC/Мосесова/image.png", "../../DOC/Мосесова/image1.png"]

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

export default Mosesova;