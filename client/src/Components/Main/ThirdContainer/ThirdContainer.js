import React from "react";
import "./ThirdContainer.css"

const ThirdContainer = () => {
    return (
        <div className="thirdContainer">
            <div className="leftContainer">
                <img src="../../IMG/DSC02774.png" />
            </div>
            <div className="rightContainer">
                <h1>Основатель клиники</h1>
                <h3>Таценко Елена Геннадьевна</h3>
                <p><b>Формула улыбки</b> — это семейная стоматология, в которой врачи заботятся о том, чтобы пациентки клиники уходили
                    от нас с улыбкой и довольные результатом. Мы работаем в Краснодаре не первый год, у нас собралась замечательная команда
                    ответственных профессиональных докторов, которые искренне любят свое дело.
                </p>
                <p>
                    Приглашаем вас в нашу клинику, чтобы лично убедиться в главном:
                    профессиональное лечение зубов без боли — современная реальность!
                </p>
                <a href="/about"><button className="oneBtn">
                    Подробнее о компании
                </button></a>
                <a href="/portfolio"><button className="twoBtn">
                    Наши работы
                </button></a>

            </div>
        </div>
    )
}

export default ThirdContainer;
