import React from "react"
import './doctors.css'
import DoctorsCarousel from "./Carousel/DoctorsCarousel"

const Doctors = () => {
    return (
        <div className="backgr">
            <div className="doctors">

                <div className="titleDoc">
                    <h1>Наша команда</h1>
                </div>
                <div>
                    <ul class="breadcrumb">
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
                        <div className="ph">
                            <img src="../../IMG/DSC02747-2.jpg" />
                            <h3>
                                Таценко Елена Геннадьевна
                            </h3>
                            <p>
                                Ортодонт
                            </p>
                        </div>
                        {/* <div className="ph">
                            <img src="../../IMG/DSC02687-2.jpg" />
                            <h3>
                                Иванов Иван Иванович
                            </h3>
                            <p>
                                ;;;;
                            </p>
                        </div> */}
                        <div className="ph">
                            <img src="../../IMG/DSC02599-2.jpg" />
                            <h3>
                                Еремеева Екатерина Романовна
                            </h3>
                            <p>
                                Терапевт
                            </p>
                        </div>

                        <div className="ph">
                            <img src="../../IMG/IMG_20230323_214441.jpg" />
                            <h3>
                                Смык Александр Александрович
                            </h3>
                            <p>
                                Хирург-имплантолог
                            </p>
                        </div>

                        <div className="ph">
                            <img src="../../IMG/DSC02705-2.jpg" />
                            <h3>
                                Куашева Фатима Магометовна
                            </h3>
                            <p>
                                Терапевт
                            </p>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

export default Doctors;