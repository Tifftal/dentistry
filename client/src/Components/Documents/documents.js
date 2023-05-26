import React from 'react'
import './documents.css'


const Documents = () => {
    const onButtonClick = () => {
        // Используем метод fetch для получения ZIP-файла
        fetch('DOC/Документы.zip').then(response => {
            response.blob().then(blob => {
                // Создаем новый объект для ZIP-файла
                const fileURL = window.URL.createObjectURL(blob);
                // Устанавливаем различные значения свойств
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Документы.zip';
                alink.click();
            })
        })
    }

    return (
        <div className="backgrDoc">
            <div className="documents">
                <div className="titleDoc">
                    <h1>Документы</h1>
                </div>
                <div>
                    <ul className="breadcrumb">
                        <li><a href="/">Главная</a></li>
                        <li>Документы</li>
                    </ul>
                </div>
                <div className="textDoc">
                    <p>
                        Уважаемые пациенты, в этом разделе вы можете ознакомиться с основными документами, связанными с работой клиники "Формула Улыбки".
                        Свяжитесь с нами, если у вас возникнут вопросы.
                    </p>
                    <a href="../DOC/Документы.zip" download><button>Скачать документы</button></a>
                </div>
                <div className="cardDocum">
                    <div className="noPhoto">
                        <div className="stickDocum">
                            <h1>
                                Документы
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Documents