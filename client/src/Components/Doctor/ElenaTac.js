import React, { useState, useRef } from "react";
import Modal from "./Modal";
import './Doctor.css';

const ElenaTac = () => {

    const Doc = {
        id: 1,
        img: "../../IMG/DSC02747-2.jpg",
        surname: "Таценко",
        name: "Елена",
        patronimic: "Генадьевна",
        specialization: "Ортодонт",
        docs: [],
        education: [`- Выпускница Кубанского государственного медицинского университета 2007`, <br />,
            `Специальность: «Стоматология»`, <br />,
            `- Проходила интернатуру в Кубанском государственном медицинском университете (КГМУ).
            Специальность: «Стоматология ортопедическая» `, <br />,
            `- 2007 Получила сертификат «Кубанского
            государственного медицинского университета» по специальности «Стоматология общей
            практики»`, <br />,
            `- 2007 Диплом о профессиональной переподготовке «Кубанский государственный
            медицинский университет». Специальность: «Ортодонтия» `, <br />,
            `- Получила сертификат «Кубанского
            государственного медицинского университета» по специальности «Ортодонтия»`, <br />,
            `- 2008 Диплом о
            профессиональной переподготовке «Кубанский государственный медицинский университет».
            Специальность: «Организация здравоохранения и общественного здоровья» `, <br />,
            `- Получила сертификат
            «Кубанского государственного медицинского университета» по специальности «Организация
            здравоохранения и общественного здоровья»`],
        qualification: [`Постоянно повышает свой профессионализм, посещая в г. Москве и г. Санкт-Петербурге ведущие
            зарубежные (W.Proffit (США), V.Cachifesta (Италия)), и российские (А. Тугарин, С. Попов,
            А. Тихонов) конференции и семинары.`, <br />, `- Семинар "Использование скелетной опоры и сегментарных дуг для подготовки к протезированию" Roxana Petcu`, <br />, `- Вебинары OrthoTalks Нуртдинов Ильяр, Михаил Морозов, Кирилл Зернов`, <br />, `- С. Блум "Комплексный подход к ведению ортодонтических пациентов на системе Damon"`, <br />, `- Семинар М. Белоград "Эндодонтии к реставрации"`, <br />, `Продвинутый курс Dr. John C. Kois "Интедисциплинарное лечение и планирование и функциональная окклюзия", Москва 2015 г.`, <br />, `Практический курс Гаджи Дажаева "Препарирование зубов под разные типы коронок, виниров", Москва 2015 г.`, <br />, `Курс Jeffrey P. Okeson "Сохранение здоровой функции жевательной системы через призму ортодонтии и ортопедии", Санкт-Петербург 2012 г.`, <br />, `- Курсы Марко Росса "Раннее лечение: продвинутый курс"`, <br />, `- Семинары Патрисии Вергары "Кортикальная опора в ортодонтии, продвинутый курс"`, <br />, `- Курс Dr. Jai Hyun Sung "Расширенное использование ортоимплантов в ортодонтии"`, <br />, `- Азат Фазлиев "Междисциплинарное ведение пациентов. Диагностика ВНЧС. сплинт-терапия"`, <br />, `- Теоретический курс, международный конгресс Ортодонтов, г. Москва, Won Moon, Marco Rosa, dr. Kim.`, <br />, `- О. Землякова "Микроскопная эндодонтия повышенной сложности"`],
        about: [`- Кандидат медицинских наук.`, <br />, `- Врач высшей категории 2022
            Член Орто-Клуба г. Краснодар и г. Ростова-на-Дону.`, <br />,
            `- Член профессионального общества
            Ортодонтов России.`, <br />, `- Владение диагностическими методиками с использованием артикулятора и лицевой дуги.`],
    }

    const slides = ["../../DOC/Таценко/IMG-20230214-WA0004.jpg", "../../DOC/Таценко/IMG-20230214-WA0005.jpg", "../../DOC/Таценко/IMG-20230214-WA0009.jpg", "../../DOC/Таценко/IMG-20230214-WA0010.jpg", "../../DOC/Таценко/IMG-20230214-WA0012.jpg", "../../DOC/Таценко/IMG-20230214-WA0018.jpg", "../../DOC/Таценко/IMG-20230214-WA0022.jpg", "../../DOC/Таценко/IMG-20230214-WA0023.jpg", "../../DOC/Таценко/IMG-20230214-WA0026.jpg", "../../DOC/Таценко/IMG-20230214-WA0027.jpg", "../../DOC/Таценко/IMG-20230214-WA0028.jpg", "../../DOC/Таценко/IMG-20230214-WA0029.jpg", "../../DOC/Таценко/IMG-20230214-WA0030.jpg", "../../DOC/Таценко/IMG-20230214-WA0031.jpg", "../../DOC/Таценко/IMG-20230214-WA0032.jpg", "../../DOC/Таценко/IMG-20230214-WA0033.jpg", "../../DOC/Таценко/IMG-20230214-WA0034.jpg", "../../DOC/Таценко/IMG-20230214-WA0035.jpg", "../../DOC/Таценко/IMG-20230214-WA0036.jpg", "../../DOC/Таценко/IMG-20230214-WA0037.jpg", "../../DOC/Таценко/IMG-20230214-WA0038.jpg", "../../DOC/Таценко/IMG-20230214-WA0039.jpg", "../../DOC/Таценко/IMG-20230214-WA0040.jpg", "../../DOC/Таценко/IMG-20230214-WA0041.jpg", "../../DOC/Таценко/IMG-20230214-WA0042.jpg", "../../DOC/Таценко/IMG-20230214-WA0043.jpg", "../../DOC/Таценко/IMG-20230214-WA0044.jpg", "../../DOC/Таценко/IMG-20230214-WA0045.jpg", "../../DOC/Таценко/IMG-20230214-WA0046.jpg", "../../DOC/Таценко/IMG-20230214-WA0047.jpg", "../../DOC/Таценко/IMG-20230214-WA0048.jpg", "../../DOC/Таценко/IMG-20230214-WA0049.jpg", "../../DOC/Таценко/IMG-20230214-WA0050.jpg", "../../DOC/Таценко/IMG-20230214-WA0051.jpg", "../../DOC/Таценко/IMG-20230214-WA0052.jpg", "../../DOC/Таценко/IMG-20230214-WA0053.jpg", "../../DOC/Таценко/IMG-20230214-WA0054.jpg", "../../DOC/Таценко/IMG-20230214-WA0055.jpg", "../../DOC/Таценко/IMG-20230214-WA0056.jpg", "../../DOC/Таценко/IMG-20230214-WA0057.jpg", "../../DOC/Таценко/IMG-20230214-WA0058.jpg", "../../DOC/Таценко/IMG-20230214-WA0059.jpg", "../../DOC/Таценко/IMG-20230214-WA0060.jpg", "../../DOC/Таценко/IMG-20230214-WA0061.jpg", "../../DOC/Таценко/IMG-20230214-WA0062.jpg", "../../DOC/Таценко/IMG-20230214-WA0063.jpg", "../../DOC/Таценко/IMG-20230214-WA0064.jpg", "../../DOC/Таценко/IMG-20230214-WA0065.jpg", "../../DOC/Таценко/IMG-20230214-WA0066.jpg", "../../DOC/Таценко/IMG-20230214-WA0067.jpg", "../../DOC/Таценко/IMG-20230214-WA0068.jpg", "../../DOC/Таценко/IMG-20230214-WA0069.jpg", "../../DOC/Таценко/IMG-20230214-WA0071.jpg", "../../DOC/Таценко/IMG-20230214-WA0072.jpg", "../../DOC/Таценко/IMG-20230214-WA0073.jpg",
        "../../DOC/Таценко/IMG-20230214-WA0074.jpg", "../../DOC/Таценко/IMG-20230214-WA0075.jpg", "../../DOC/Таценко/IMG-20230214-WA0077.jpg", "../../DOC/Таценко/IMG-20230214-WA0079.jpg"]

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
            {
                open && (
                    <Modal
                        image={currentImage}
                        handleClose={handleCloseModal}
                    />
                )
            }
        </div >
    )
};

export default ElenaTac;