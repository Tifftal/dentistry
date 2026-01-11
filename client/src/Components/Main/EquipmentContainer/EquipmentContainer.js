import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./EquipmentContainer.css";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { useRef } from "react"; // Добавили useRef

const EquipmentContainer = () => {
    const swiperRef = useRef(null); // Создаем ссылку на экземпляр Swiper

    const equipmentData = [
        {
            title: "Микроскоп Carl Zeiss",
            description: "Прибор для лечения корневых каналов, сложных случаев перелечивания, художественной реставрации и протезирования зубов. Позволяет работать под многократным увеличением, обеспечивая ювелирную точность.",
            images: ["../../IMG/DSC02360.webp", "../../IMG/IMG_3104.webp", "../../IMG/DSC02378.webp"]
        },
        {
            title: "3D Сканер PANDA",
            description: "Для цифрового изготовления коронок и ортодонтических конструкций. Полностью заменяет обычные слепки, повышает точность работ и значительно ускоряет сроки лечения.",
            images: ["../../IMG/IMG_0581.webp", "../../IMG/IMG_8305.webp", "../../IMG/IMG_8077.webp"]
        },
        {
            title: "3D Принтер ANYCUBIC",
            description: "Высокотехнологичное оборудование для стоматологической печати. Позволяет создавать индивидуальные конструкции с идеальной анатомической точностью.",
            images: ["../../IMG/IMG_0578.webp", "../../IMG/IMG_0577.webp", "../../IMG/IMG_0579.webp"]
        }
    ];

    return (
        <div className="equipmentSection">
            <div className="title">
                <h1>Новейшее оборудование</h1>
            </div>

            <div className="outerContainer">
                {/* Добавили onClick для ручного управления */}
                <div className="custom-prev" onClick={() => swiperRef.current?.slidePrev()}>❮</div>
                <div className="custom-next" onClick={() => swiperRef.current?.slideNext()}>❯</div>

                <Swiper
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper; // Записываем экземпляр при инициализации
                    }}
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={100}
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination'
                    }}
                    autoplay={{
                        delay: 10000,
                        disableOnInteraction: false
                    }}
                    className="equipmentSwiper"
                >
                    {equipmentData.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="equipSlideContent">
                                <div className="equipInfo">
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                </div>

                                <div className="equipGallery">
                                    <div className="equipImgBox box-main">
                                        <img src={item.images[0]} alt={item.title}/>
                                    </div>
                                    <div className="subPhotos">
                                        <div className="equipImgBox">
                                            <img src={item.images[1]} alt={item.title}/>
                                        </div>
                                        <div className="equipImgBox">
                                            <img src={item.images[2]} alt={item.title}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default EquipmentContainer;