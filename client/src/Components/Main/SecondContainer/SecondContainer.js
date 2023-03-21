import React from "react";

const SecondContainer = () => {
    return (
    <div className="secondContainer">
        <div className="leftContainer">
            <h1>
                Наши специалисты
            </h1>
            <p>
                Наших пациентов мы лечим как лечили бы себя, своих родственников или друзей.
                Специалисты нашей клиники безгранично любят свою профессию и ответственно
                подходят к своей работе.
            </p>
            <button>
                Подробнее о команде {">>"}
            </button>
        </div>
        <div className="rightContainer">
            <div className="photoContainer">
                {/* Фотка какая-то */}
            </div>
            <div className="photoContainer">
                {/* Фотка какая-то */}
            </div>
            <div className="photoContainer">
                {/* Фотка какая-то */}
            </div>
            <div className="photoContainer">
                {/* Фотка какая-то */}
            </div>
        </div>
    </div>
    )
}

export default SecondContainer;
