import "swiper/css";
import "swiper/css/navigation";
import './Doctor.css';

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Modal from "./Modal";
import { useState } from "react";

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

    const handleOpenModal = (src) => {
        setCurrentImage(src);
        setOpen(true);
    };

    const handleCloseModal = () => {
        setCurrentImage(null);
        setOpen(false);
    };

    return (
        <div className="doctorContainer">
            <h1>{Doc.surname} {Doc.name} {Doc.patronimic}</h1>

            <div className="DoctorCard">
                <div className="DoctorPhoto">
                    <img className="DoctorPhotoImg" src={Doc.img} alt={Doc.surname} />
                </div>

                <div className="DoctorInfo">
                    <h2>Образование</h2>
                    <p>{Doc.education}</p>

                    <h2>Квалификация</h2>
                    <p>{Doc.qualification}</p>

                    <h2>О стоматологе</h2>
                    <p>{Doc.about}</p>

                    <div className="docSliderWrap">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay]}
                            navigation={true}
                            slidesPerView={3}
                            slidesPerGroup={1}
                            spaceBetween={12}
                            loop={true}
                            allowTouchMove={true}   // ✅ если хочешь ТОЛЬКО стрелками
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                520: { slidesPerView: 2 },
                                900: { slidesPerView: 3 },
                            }}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false
                            }}
                            className="docSwiper"
                        >
                            {slides.map((src) => (
                                <SwiperSlide key={src} className="docSlide">
                                    <img src={src} alt="" onClick={() => handleOpenModal(src)} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>

            {open && <Modal image={currentImage} handleClose={handleCloseModal} />}
        </div>
    );
};

export default Mosesova;