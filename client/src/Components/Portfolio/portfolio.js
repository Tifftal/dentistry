import react from "react"
import './portfolio.css'

const Portfolio = () => {
    return (
        <div className="backgrPort">
            <div className="portfolio">
                <div className="titlePort">
                    <h1>Портфолио</h1>
                </div>
                <div>
                    <ul class="breadcrumbPort">
                        <li><a href="/">Главная</a></li>
                        <li><a href="/doctors">Команда</a></li>
                        <li>Портфолио</li>
                    </ul>
                </div>
                <div className="clinicalCase">
                    <div className="caseContainer">
                        <div className="case">
                            <img src="../../IMG/protezirovanie_zubov_foto_do_i_posle_7.jpg" />
                        </div>
                        <div className="case">
                            <img src="../../IMG/protezirovanie_zubov_foto_do_i_posle_7-2.jpg" />
                        </div>
                    </div>
                    <div className="case">
                        <h3>
                            Клинический случай №1
                        </h3>
                        <p>
                            Жалобы: боль в зубе при надкусывании.
                            В другой клинике сказали, что необходимо удаление, т. к большая киста.
                            Была удалена не корректная пломба, извлечён металлический штифт. В итоге спасли зуб, киста зажила.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio