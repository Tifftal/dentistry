import React from "react";
import "./way.css"

const Way = () => {
    return (
        <div className="contact">
            <div className="titleContact">
                <h1 id="map">
                    Адрес клиники
                </h1>
            </div>

            <div className="map">
                <iframe src="https://yandex.ru/map-widget/v1/?ll=39.009379%2C45.021054&mode=poi&poi%5Bpoint%5D=39.009469%2C45.020941&poi%5Buri%5D=ymapsbm1%3A%2F%2Forg%3Foid%3D1215012496&z=18.62" title="map" width="95%" height="500px" frameBorder="1" allowFullScreen={true}></iframe>
            </div>
        </div>
    )
}

export default Way;
