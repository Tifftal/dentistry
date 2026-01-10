import "./SecondContainer.css";

import Carousel from "./Carousel/Carousel";
import React from "react";

const SecondContainer = () => {
    const isMobile = window.innerWidth < 900;

    return (
        <section className="second-section-wrapper">
            {isMobile ? (
                <Carousel />
            ) : (
                <div className="secondContainer">
                    <div className="box1">
                        <h1>Наши специалисты</h1>
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

                    <div className="box3">
                        <img src="../../IMG/DSC02747-2.jpg" alt="Таценко Елена Геннадьевна" />
                        <h3>Таценко Елена Геннадьевна</h3>
                        <h4>Кандидат медицинских наук</h4>
                        <p>Врач общей практики</p>
                        <p>Терапевт, ортопед, ортодонт</p>
                    </div>

                    <div className="box4">
                        <img src="../../IMG/Мосесова А.С.jpg" alt="Мосесова Анжелика Сержевна" />
                        <h3>Мосесова Анжелика Сержевна</h3>
                        <p>Стоматолог-имплантолог</p>
                        <p>Стоматолог-хирург, Гнатолог</p>
                    </div>

                    <div className="box5">
                        <img src="../../IMG/DSC02705-2.jpg" alt="Куашева Фатима Магометовна" />
                        <h3>Куашева Фатима Магометовна</h3>
                        <p>Врач общей практики</p>
                        <p>Терапевт, детский стоматолог</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default SecondContainer;