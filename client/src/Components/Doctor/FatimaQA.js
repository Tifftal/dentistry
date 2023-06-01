import React, { useState, useRef } from "react";
import './Doctor.css';
import Modal from "./Modal";
const Doc = {
    id: 4,
    img: "../../IMG/DSC02705-2.jpg",
    name: "Фатима",
    surname: "Куашева",
    patronimic: "Магометовна",
    specialization: "Терапевт",
    docs: [],
    education: [`- 2015 г. Кубанский государсвенный медицинский университет, Краснодар, стоматологический факультет, Стоматолог.`, <br />, `
        - 2016 г. Центральный институт повышения квалификации и профессиональной переподготовки, Стоматология ортопедическая, Врач стоматолог ортопед.`, <br />, `
        - 2016 г. Кубанский государственный медицинский университет, Краснодар, Интернатура, Стоматология общей практики.`, <br />, `
        - 2020 г. Автономной некоммерческой организации допоолниктельного профессионального образования "Центральный многопрофильный институт", Повышение квалификации, Стоматология общей практики.`],
    qualification: [`- 2022 г. 3й конгресс прямой реставрации Wowresto, Dentist education.`, <br />, `
        - 2022 г. Реставрация Pro, Diamonds Dental Clinic.`, <br />, `
        - 2020 г. Эндодонтия повышенной сложности, Dental course.`, <br />, `
        - 2020 г. Адгезивные керамические реставрации в практике
        - врача-стоматолога, Dental art.`, <br />, `
        - 2019 г. Прямые реставрации фронтальной группы зубов Direct Anterior
        Denting.education.`, <br />, `
        - 2018 г. The bond - Алгоритмы адгезионных процессов, Hexagon international LTD.`, <br />, `
        - 2016 г. Клиника боли лица и челюстей, Mis course.`, <br />, `
        - 2014 г. Современные вопросы применения 3D-технологий в
        современной стоматологической практике, Пикассо.`
        ],
    about: [`- Умение работать с оптикой (бинокуляры, микроскоп).`, <br />, `- Применение в практике новейших технологий.`, <br />, `- Эстетичные и художественные реставрации.`, <br />, `- Индивидуальный подход к нашим самым маленьким и требовательным пациентам.`],
}

const slides = ["../../DOC/Куашева/Куашева.jpg", "../../DOC/Куашева/Куашева3.jpg", "../../DOC/Куашева/сертифткаты_page-0001.jpg", "../../DOC/Куашева/сертифткаты_page-0002.jpg", "../../DOC/Куашева/сертифткаты_page-0003.jpg", "../../DOC/Куашева/сертифткаты_page-0004.jpg", "../../DOC/Куашева/сертифткаты_page-0005.jpg", "../../DOC/Куашева/сертифткаты_page-0006.jpg", "../../DOC/Куашева/сертифткаты_page-0007.jpg", "../../DOC/Куашева/сертифткаты_page-0008.jpg", "../../DOC/Куашева/сертифткаты_page-0009.jpg", "../../DOC/Куашева/сертифткаты_page-0010.jpg", "../../DOC/Куашева/сертифткаты_page-0011.jpg", "../../DOC/Куашева/сертифткаты_page-0012.jpg", "../../DOC/Куашева/сертифткаты_page-0013.jpg", "../../DOC/Куашева/сертифткаты_page-0014.jpg", "../../DOC/Куашева/сертифткаты_page-0015.jpg"]

const Fatima = () => {
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

export default Fatima;
