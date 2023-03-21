import React from "react";
import "./ThirdContainer.css"

const ThirdContainer = () => {
    return (
        <div className="thirdContainer">
            <div className="leftContainer">
                <h1>Основатель клиники</h1>
                {/* <img src="../../../IMG/casual-life-3d-female-doctor-with-clipboard.png" /> */}
            </div>
            <div className="rightContainer">
                <h1>Основатель клиники</h1>
                <h3>Иванова Марина Ивановна</h3>
                <p>Формула улыбки — это семейная стоматология, в которой врачи заботятся о том, чтобы пациентки клиники уходили
                    от нас с улыбкой и довольные результатом. Мы работаем в Сочи не первый год, у нас собралась замечательная команда
                    ответственных профессиональных докторов, которые искренне любят свое дело.
                </p>
                <p>
                    Приглашаем вас в нашу клинику, чтобы лично убедиться в главном:
                    профессиональное лечение зубов без боли — современная реальность!
                </p>
                <button>
                    Подробнее о компании
                </button>
                <button>
                    Наши пациенты
                </button>

            </div>
        </div>
    )
}

export default ThirdContainer;
