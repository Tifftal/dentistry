import React, { useState } from "react";
import './Doctor.css';
import Modal from "./Modal";

const Doc = {
    id: 2,
    img: "../../IMG/DSC02599-2.jpg",
    name: "Екатерина",
    surname: "Еремеева",
    patronimic: "Романовна",
    specialization: "Терапевт",
    docs: [],
    education: `- Образование по специальности «Стоматология 31.05.03» в КубГМУ в 2022 году с отличием.`,
    qualification: [`- Обучение в Пикассо по цефалометрическому анализу, работа с КЛКТ-снимками, 2022.`, <br />, `
        - Прошла онлайн-конгресс «Путь начинающего стоматолога», 2023.`, <br />, `
        - Онлайн-курс «Ортодонтическая подготовка перед протезированием», 2023.`],
    about: [`- Врач ординатор-ортодонт. `, <br />, `- Владение современными протоколами диагностики.`],
}

const slides = ["../../DOC/Еремеева/Еремеева.jpg", "../../DOC/Еремеева/Еремеева 2.jpg"]

const Eremeeva = () => {
    const [open, setOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const handleOpenModal = (slide) => {
        setCurrentImage(slide);
        setOpen(true);
    };

    const handleCloseModal = () => {
        setCurrentImage(null);
        setOpen(false);
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

export default Eremeeva;