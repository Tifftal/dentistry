import './services.css'

import React from "react"

const Services = () => {
    // Путь к файлу
    const pdfPath = 'DOC/Прайс 2026.pdf';

    const onButtonClick = () => {
        const link = document.createElement('a');
        link.href = pdfPath;
        link.download = 'Прейскурант 2026.pdf';
        link.click();
    }

    return (
        <div className="backgrServ">
            <div className="services">
                <div className="titleServ">
                    <h1>Услуги</h1>
                </div>
                <div>
                    <ul className="breadcrumbServ">
                        <li><a href="/">Главная</a></li>
                        <li>Услуги</li>
                    </ul>
                </div>

                <div className="infServ">
                    <div className="textInfServ">
                        <h1>
                            Наши услуги предоставляются командой высококвалифицированных стоматологов,
                            которые обладают обширным опытом и знаниями в области стоматологии.
                            Мы предлагаем широкий спектр услуг, включая профессиональную гигиену полости рта,
                            лечение кариеса, имплантацию зубов, ортодонтию и другие.
                        </h1>
                        <h1>
                            Цены в нашей клинике доступны и прозрачны.
                            Мы стремимся обеспечить пациентам качественную стоматологическую помощь
                            по разумной стоимости.
                        </h1>
                        <h1>
                            Для ознакомления Вы так же можете скачать полный
                            <span onClick={() => { onButtonClick() }}> Прейскурант ООО ЛАДА от 12.12.2025</span>.
                            Цены в данном разделе представлены для ознакомления и не являются публичной офертой.
                            Окончательная стоимость лечения определяется после очного осмотра и проведения диагностики.
                        </h1>
                    </div>
                </div>

                <div className="pdf-viewer-container">
                    <h1 style={{ color: "rgba(0,0,0, 0.6)", fontWeight: "700", fontSize: "36px", textAlign: "left", marginBottom: "20px" }}>
                        Основные услуги и цены
                    </h1>

                    {/* Кнопка, которая видна ТОЛЬКО на мобильных */}
                    <div className="mobile-pdf-button">
                        <p>Для удобного просмотра прейскуранта на мобильном устройстве:</p>
                        <button onClick={() => window.open(pdfPath, '_blank')}>
                            Открыть прайс в новом окне
                        </button>
                    </div>

                    {/* Фрейм, который будет скрыт на маленьких экранах или заменен ссылкой */}
                    <iframe
                        src={`${pdfPath}#toolbar=0`}
                        width="100%"
                        height="800px"
                        title="Price List"
                        className="pdf-iframe"
                    >
                        <p>Просмотр недоступен. <a href={pdfPath}>Скачать PDF</a></p>
                    </iframe>
                </div>
            </div>

            {/* Декоративный заголовок сбоку */}
            <div className="ServicesTitle">
                <h2>Услуги</h2>
            </div>
        </div>
    )
}

export default Services