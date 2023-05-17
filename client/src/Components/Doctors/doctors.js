import React from "react";
import './doctors.css';
import DoctorsCarousel from "./Carousel/DoctorsCarousel";
import Doctor from "../Doctor/Doctor";
import { Link } from "react-router-dom";

const Doctors = () => {

    const doctors = [
        {
            id: 1,
            img: "../../IMG/DSC02747-2.jpg",
            name: "Таценко",
            surname: "Елена",
            patronimic: "Генадьевна",
            specialization: "Ортодонт",
            docs: [],
        },
        {
            id: 2,
            img: "../../IMG/DSC02599-2.jpg",
            name: "Екатерина",
            surname: "Еремеева",
            patronimic: "Романовна",
            specialization: "Терапевт",
            docs: [],
        },
        {
            id: 3,
            img: "../../IMG/IMG_20230323_214441.jpg",
            name: "Александр",
            surname: "Смык",
            patronimic: "Александрович",
            specialization: "Хирург-имплантолог",
            docs: [],
        },
        {
            id: 4,
            img: "../../IMG/DSC02705-2.jpg",
            name: "Фатима",
            surname: "Куашева",
            patronimic: "Магометовна",
            specialization: "Терапевт",
            docs: [],
        }
    ]

    return (
        <div className="backgr">
            <div className="doctors">

                <div className="titleDoc">
                    <h1>Наша команда</h1>
                </div>
                <div>
                    <ul className="breadcrumb">
                        <li><a href="/">Главная</a></li>
                        <li>Команда</li>
                    </ul>
                </div>
                <div className="textDoc">
                    <p>
                        Наши сотрудники - это команда высококвалифицированных стоматологов, которые обладают обширным опытом и знаниями в области стоматологии. Мы гордимся нашей командой и уверены в их способности предоставить нашим пациентам качественную стоматологическую помощь.
                    </p>
                </div>
                <div className="docBtn">
                    <a href="/portfolio"><button>Смотреть портфолио</button></a>
                    <a href="/vacancy"><button>Наши вакансии</button></a>
                </div>
                {window.innerWidth < 900 ?
                    <DoctorsCarousel />
                    :
                    <div className="photoDoc">
                        <div className="noPhoto">
                            <div className="stick">
                                <h1>
                                    Команда
                                </h1>
                            </div>
                        </div>
                        {doctors?.map(doc => (
                            <Link to={`/doctors/doctor/${doc.id}`}>
                                <div className="ph">
                                    <img src={doc.img} alt={doc.surname}/>
                                    <h3>
                                        {doc.surname} {doc.name} {doc.patronimic}
                                    </h3>
                                    <p>
                                        {doc.specialization}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>}
            </div>
        </div>
    )
}

export default Doctors;