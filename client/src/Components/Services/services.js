import react from "react"
import './services.css'

const Services = () => {
    return (
        <div className="backgrServ">
            <div className="services">
                <div className="titleServ">
                    <h1>Услуги</h1>
                </div>
                <div>
                    <ul class="breadcrumbServ">
                        <li><a href="/">Главная</a></li>
                        <li>Услуги</li>
                    </ul>
                </div>
                <div className="infServ">
                    <div className="textInfServ">
                        <h1>
                            Каждое действие в нашей работе направлено на сохранение зуба.
                            Лечением кариеса или пульпита занимаются такие специалисты как реставратор и эндодонтист.
                            Мы специально разделили профессию стоматолога на эти две узкие специализации,
                            что бы каждый доктор в своём развитии достиг высокого уровня работы.
                        </h1>
                        <h1>
                            Если зуб не удалось сохранить,
                            то постановку имплантата или фиксацию винира мы будем производить с высочайшей точностью.
                        </h1>
                        <h1>
                            Прайс дает представление о стоимости наших услуг. Красивая улыбка – это доступно.
                            При высоком качестве работы наши цены – чуть выше средних по городу.
                            Своих пациентов мы лечим так, как лечили бы себя, своих родственников или друзей.
                        </h1>
                        <h1>
                            Для ознакомления Вы так же можете скачать полный прейскурант <a href="#">Прейскурант ООО СМАЙЛ ФОРМУЛА от 1.02.2023</a>.
                            Цены в данном разделе представлены для ознакомления и не являются публичной офертой.
                            Окончательная стоимость лечения определяется после очного осмотра и проведения диагностики.
                        </h1>
                        <a href="/"><button>Наши гарантии (docx)</button></a>
                        <a href="/"><button>Заказать услугу</button></a>
                    </div>
                    <div className="spisokServ">
                        <table>
                            {/* <caption>Таблица № 1</caption> */}
                            <tr>
                                <td className="col1">1.</td>
                                <td className="col2">Консультационные услуги</td>
                                <td className="col3">1200 ₽</td>
                            </tr>
                            <tr>
                                <td className="col1">2.</td>
                                <td className="col2">Консультационные услуги</td>
                                <td className="col3">1200 ₽</td>
                            </tr>
                            <tr>
                                <td className="col1">3.</td>
                                <td className="col2">Консультационные услуги</td>
                                <td className="col3">1200 ₽</td>
                            </tr>
                            <tr>
                                <td className="col1">4.</td>
                                <td className="col2">Консультационные услуги</td>
                                <td className="col3">1200 ₽</td>
                            </tr>
                            <tr>
                                <td className="col1">5.</td>
                                <td className="col2">Консультационные услуги</td>
                                <td className="col3">1200 ₽</td>
                            </tr>
                        </table>
                        {/* <div className="serv">
                            <a href="#">1.</a>
                            <div className="podrobnee"><a href="#">Подробнее</a></div>
                        </div>
                        <div className="serv">
                            <a href="#">2.</a>
                        </div>
                        <div className="serv">
                            <a href="#">3.</a>
                        </div>
                        <div className="serv">
                            <a href="#">4.</a>
                        </div>
                        <div className="serv">
                            <a href="#">5.</a>
                        </div>
                        <div className="serv">
                            <a href="#">6.</a>
                        </div>
                        <div className="serv">
                            <a href="#">7.</a>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services