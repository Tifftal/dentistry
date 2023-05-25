import React from "react";
import './Doctor.css';

const Smyk = () => {
    const onButtonClick = () => {
        fetch('DOC/СмыкАлександрАоександрович.zip').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Смык.zip';
                alink.click();
            });
        });
    };
    

    const Doc = {
        id: 3,
            img: "../../IMG/IMG_20230323_214441.jpg",
            name: "Александр",
            surname: "Смык",
            patronimic: "Александрович",
            specialization: "Хирург-имплантолог",
            docs: [],
            education: [`- Диплом об окончании медицинской академии 2015 г.`, <br />,`
            - Сертификат об окончании интернатура - стоматолог общей практики 2016 г.`, <br />,`
            - Сертификат по хирургической стоматологии - 2017 г.`, <br />,`
            - 2010-2015 г Днепропетровская государственная медицинская академия.`],
            qualification: [`- Консультатирование, составление комплексных планов лечения.`, <br />,`
            - Удаление зубов.`, <br />,`
            - Лечение воспалительных заболеваний полости рта.`, <br />,`
            - Владение современными техниками в области
            дентальной имплантации (одномоментной и отсроченной-
            коррекции объёма тканей полости рта (костные и мягкотканные пластики), открытый/закрытый
            синус лифтинг, вертикальная/горизонтальная аугментация костного гребня, пластика десны).`, <br />,`
            - Протезирования на дентальных имплантатах`],
            about: ``,
    }

    return (
        <div className="doctorContainer">
            <h1>
                {Doc.surname} {Doc.name} {Doc.patronimic}
            </h1>
            <div className="DoctorCard">
                <div>
                    <img src={Doc.img} alt={Doc.surname}/>
                </div>
                <div>
                    <h2>Образование</h2>
                    <p>
                        {Doc.education}
                    </p>
                    <h2>Квалификация</h2>
                    <p>
                        {Doc.qualification}
                    </p>
                    <h2>О стоматологе</h2>
                    <p>
                        {Doc.about}
                    </p>
                    <button onClick={()=>{onButtonClick()}}>Документы</button>
                </div>

            </div>
        </div>
    )
};

export default Smyk;