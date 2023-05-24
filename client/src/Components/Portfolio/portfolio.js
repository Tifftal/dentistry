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
                    <div className="case">
                        <img src="../../IMG/keramicheskie-viniry.jpg" />
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