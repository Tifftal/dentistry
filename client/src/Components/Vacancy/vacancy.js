import react from "react"
import './vacancy.css'

const Vacancy = () => {
    return (
        <div className="backgrVac">
            <div className="vacancy">
                <div className="titleVac">
                    <h1>Вакансии</h1>
                </div>
                <div>
                    <ul class="breadcrumbVac">
                        <li><a href="/">Главная</a></li>
                        <li><a href="/doctors">Команда</a></li>
                        <li>Вакансии</li>
                    </ul>
                </div>
                <div className="textVac">
                    <p>
                        Рады приветствовать вас на странице Вакансии! 
                        Как только у нас появится информация о вакантных местах работы в клинике «Формула улыбки», 
                        мы обязательно разместим ее здесь. Вы можете прислать свое резюме на электронный адрес — 
                        <span>Formula-ulybki@inbox.ru</span>
                        , мы свяжемся с вами при обновлении данного раздела.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Vacancy