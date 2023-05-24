import React from "react";
import Doc from "../../Store/Doctors";
import './Doctor.css';

const Eremeeva = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('DOC/Еремеева Екатерина Романовна.zip').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Еремеева Екатерина Романовна.zip';
                alink.click();
            })
        })
    }

    const Doc = {
        id: 2,
            img: "../../IMG/DSC02599-2.jpg",
            name: "Екатерина",
            surname: "Еремеева",
            patronimic: "Романовна",
            specialization: "Терапевт",
            docs: [],
            education: `- Образование по специальности «Стоматология 31.05.03» в КубГМУ в 2022 году с отличием.`,
            qualification: [`- Обучение в Пикассо по цефалометрическому анализу, работа с КЛКТ-снимками, 2022.`, <br />,`
            - Прошла онлайн-конгресс «Путь начинающего стоматолога», 2023.`, <br />,`
            - Онлайн-курс «Ортодонтическая подготовка перед протезированием», 2023.`],
            about: [`- Врач ординатор-ортодонт. `, <br />,`- Владение современными протоколами диагностики.`],
    }

    return (
        <div className="doctorContainer">
            <h1>
                {Doc.surname} {Doc.name} {Doc.patronimic}
            </h1>
            <div className="DoctorCard">
                <div>
                    <img src={Doc.img} />
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

export default Eremeeva;