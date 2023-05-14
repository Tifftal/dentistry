import React from "react";
import "./way.css"

const Way = () => {
    return (
        <div className="contact">
            <div className="titleContact">
                <h1>
                    Адрес клиники
                </h1>
            </div>
            <div className="address">
                <div className="infAddress">
                    Формула улыбки
                </div>
                <div className="map">
                {/* <a className="maptitle" href="https://yandex.ru/maps/org/formula_ulybki/1215012496/?utm_medium=mapframe&utm_source=maps">Формула улыбки</a>
                <a className="maptext" href="https://yandex.ru/maps/35/krasnodar/category/dental_clinic/184106132/?utm_medium=mapframe&utm_source=maps">Стоматологическая клиника в Краснодаре</a> */}
                <iframe src="https://yandex.ru/map-widget/v1/?ll=39.009379%2C45.021054&mode=poi&poi%5Bpoint%5D=39.009469%2C45.020941&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1215012496&z=18.62" width="100%" height="500px" frameborder="1" allowfullscreen="true"></iframe>
            </div>
            </div>
        </div>
    )
}

export default Way;
