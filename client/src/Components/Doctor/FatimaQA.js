import React from "react";
import './Doctor.css';

const Fatima = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('DOC/КуашеваФатимаМагометовна.zip').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL + '/КуашеваФатимаМагометовна.zip';
                alink.download = 'КуашеваФатимаМагометовна.zip';
                alink.click();
            })
        })
    }

    const Doc = {
        id: 4,
            img: "../../IMG/DSC02705-2.jpg",
            name: "Фатима",
            surname: "Куашева",
            patronimic: "Магометовна",
            specialization: "Терапевт",
            docs: [],
            education: [`- 2015 г. Кубанский государсвенный медицинский университет, Краснодар, стоматологический факультет, Стоматолог.`, <br />,`
            - 2016 г. Центральный институт повышения квалификации и профессиональной переподготовки, Стоматология ортопедическая, Врач стоматолог ортопед.`, <br />,`
            - 2016 г. Кубанский государственный медицинский университет, Краснодар, Интернатура, Стоматология общей практики.`, <br />,`
            - 2020 г. Автономной некоммерческой организации допоолниктельного профессионального образования "Центральный многопрофильный институт", Повышение квалификации, Стоматология общей практики.`],
            qualification: [`- 2022 г. 3й конгресс прямой реставрации Wowresto, Dentist education.`, <br />,`
            - 2022 г. Реставрация Pro, Diamonds Dental Clinic.`, <br />,`
            - 2020 г. Эндодонтия повышенной сложности, Dental course.`, <br />,`
            - 2020 г. Адгезивные керамические реставрации в практике
            - врача-стоматолога, Dental art.`, <br />,`
            - 2019 г. Прямые реставрации фронтальной группы зубов Direct Anterior
            Denting.education.`, <br />,`
            - 2018 г. The bond- Алгоритмы адгезионных процессов, Hexagon international LTD.`, <br />,`
            - 2016 г. Клиника боли лица и челюстей, Mis course.`, <br />,`
            - 2014 г. Современные вопросы применения 3D-технологий в
            современной стоматологической практике, Пикассо.`],
            about: [`- Умение работать с оптикой (бинокуляры, микроскоп).`, <br />,`- Применение в практике новейших технологий.`],
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

export default Fatima;