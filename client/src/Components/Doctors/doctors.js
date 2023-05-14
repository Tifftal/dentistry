import react from "react"
import './doctors.css'

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
                <div className="photoDoc">

                    {/* <div className="cart">
                            <a className="onea" href="https://yandex.ru/maps/10750/ramenskoe/?utm_medium=mapframe&utm_source=maps">
                                Раменское
                            </a>
                            <a className="twoa" href="https://yandex.ru/maps/10750/ramenskoe/house/severnoye_shosse_42/Z0EYdAZnS0MGQFtvfXl5cHRgZQ==/?ll=38.217456%2C55.581848&utm_medium=mapframe&utm_source=maps&z=16.5">
                                Северное шоссе, 42 — Яндекс Карты
                            </a>
                            <iframe src="https://yandex.ru/map-widget/v1/?ll=38.217456%2C55.581848&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgozMjI4ODEyNzc3EmbQoNC-0YHRgdC40Y8sINCc0L7RgdC60L7QstGB0LrQsNGPINC-0LHQu9Cw0YHRgtGMLCDQoNCw0LzQtdC90YHQutC-0LUsINCh0LXQstC10YDQvdC-0LUg0YjQvtGB0YHQtSwgNDIiCg153hhCFcxTXkI%2C&z=16.5"
                                frameborder="1" allowfullscreen="true">
                            </iframe>
                        </div> */}

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
                    <div className="ph">
                        <img src="../../IMG/DSC02687-2.jpg" />
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

                    {/* <div className="ph">
                        <img src="../../IMG/DSC02687-2.jpg" />
                        <h3>
                            Иванов Иван Иванович
                        </h3>
                        <p>
                            Терапевт
                        </p>
                    </div>

                    <div className="ph">
                        <img src="../../IMG/DSC02687-2.jpg" />
                        <h3>
                            Иванов Иван Иванович
                        </h3>
                        <p>
                            Терапевт
                        </p>
                    </div>

                    <div className="ph">
                        <img src="../../IMG/DSC02687-2.jpg" />
                        <h3>
                            Иванов Иван Иванович
                        </h3>
                        <p>
                            Терапевт
                        </p>
                    </div>

                    <div className="ph">
                        <img src="../../IMG/DSC02687-2.jpg" />
                        <h3>
                            Иванов Иван Иванович
                        </h3>
                        <p>
                            Терапевт
                        </p>
                    </div>
                    <div className="ph">
                        <img src="../../IMG/DSC02687-2.jpg" />
                        <h3>
                            Иванов Иван Иванович
                        </h3>
                        <p>
                            Терапевт
                        </p>
                    </div> */}

                    {/* <div className="ph">
                        <img src="../../IMG/DSC02687-2.jpg" />
                        <h3>
                            Иванов Иван Иванович
                        </h3>
                        <p>
                            Терапевт
                        </p>
                    </div>
                    <div className="ph">
                        <img src="../../IMG/DSC02687-2.jpg" />
                        <h3>
                            Иванов Иван Иванович
                        </h3>
                        <p>
                            Терапевт
                        </p></div>
                    <div className="ph">
                        <img src="../../IMG/DSC02687-2.jpg" />
                        <h3>
                            Иванов Иван Иванович
                        </h3>
                        <p>
                            Терапевт
                        </p>
                    </div>
                    <div className="ph">
                        <img src="../../IMG/DSC02687-2.jpg" />
                        <h3>
                            Иванов Иван Иванович
                        </h3>
                        <p>
                            Терапевт
                        </p>
                    </div>
                    <div className="ph">
                        <img src="../../IMG/DSC02687-2.jpg" />
                        <h3>
                            Иванов Иван Иванович
                        </h3>
                        <p>
                            Терапевт
                        </p>
                    </div>
                    <div className="ph">
                        <img src="../../IMG/DSC02687-2.jpg" />
                        <h3>
                            Иванов Иван Иванович
                        </h3>
                        <p>
                            Терапевт
                        </p>
                    </div>
                    <div className="ph">
                        <img src="../../IMG/DSC02687-2.jpg" />
                        <h3>
                            Иванов Иван Иванович
                        </h3>
                        <p>
                            Терапевт
                        </p>
                    </div>
                    <div className="ph">
                        <img src="../../IMG/DSC02687-2.jpg" />
                        <h3>
                            Иванов Иван Иванович
                        </h3>
                        <p>
                            Терапевт
                        </p>
                    </div>
                    <div className="ph">
                        <img src="../../IMG/DSC02687-2.jpg" />
                        <h3>
                            Иванов Иван Иванович
                        </h3>
                        <p>
                            Терапевт
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Doctors