import React from "react";
import "./SecondContainer.css"
import Carousel from "./Carousel/Carousel";

const SecondContainer = () => {
    return (
        <div>
            {window.innerWidth < 900 ?
                <Carousel />
                :
                <div className="secondContainer">

                    <div className="box1">
                        <h1>
                            Наши специалисты
                        </h1>
                        <p>
                            Наших пациентов мы лечим как лечили бы себя, своих родственников или друзей.
                            Специалисты нашей клиники безгранично любят свою профессию и ответственно
                            подходят к своей работе.
                        </p>
                        <a href="/doctors">
                            <button>
                                Подробнее о команде {">>"}
                            </button>
                        </a>
                    </div>
                    <div className="box2">
                        <img src="../../IMG/DSC02599-2.jpg" />
                        <h3>
                            Еремеева Екатерина Романовна
                        </h3>
                        <p>
                            Терапевт
                        </p>
                    </div>
                    <div className="box3">
                        <img src="../../IMG/DSC02747-2.jpg" />
                        <h3>
                            Таценко Елена Геннадьевна
                        </h3>
                        <p>
                            Ортодонт
                        </p>
                    </div>
                    <div className="box4">
                        <img src="../../IMG/IMG_20230323_214441.jpg" />
                        <h3>
                            Смык Александр Александрович
                        </h3>
                        <p>
                            Хирург-имплантолог
                        </p>
                    </div>
                    <div className="box5">
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
    )
}

export default SecondContainer;
