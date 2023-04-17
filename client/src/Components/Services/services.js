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
                <div className="ServicesTitle">
                    <h2>Услуги</h2>
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
                                <td className="col3">1000 ₽</td>
                            </tr>
                            <tr>
                                <td className="col1">2.</td>
                                <td className="col2">Ультразвуковое удаление наддесневых и поддесневых зубных отложений. Полость рта</td>
                                <td className="col3">3500 ₽</td>
                            </tr>
                            <tr>
                                <td className="col1">3.</td>
                                <td className="col2">Наложение временной пломбы</td>
                                <td className="col3">700 ₽</td>
                            </tr>
                            <tr>
                                <td className="col1">4.</td>
                                <td className="col2">Восстановление зуба пломбой I, V, VI класс по Блэку с использованием материалов из фотополимеров</td>
                                <td className="col3">4200 ₽</td>
                            </tr>
                            <tr>
                                <td className="col1">5.</td>
                                <td className="col2">Инструментальная и медикаментозная обработка корневого канала</td>
                                <td className="col3">3000 ₽</td>
                            </tr>
                            <tr>
                                <td className="col1">6.</td>
                                <td className="col2">Пломбирование корневого канала зуба</td>
                                <td className="col3">3000 ₽</td>
                            </tr>
                            <tr>
                                <td className="col1">7.</td>
                                <td className="col2">Диагностическое снятие пломбы</td>
                                <td className="col3">1500 ₽</td>
                            </tr>
                            <tr>
                                <td className="col1">8.</td>
                                <td className="col2">Восстановление зуба вкладками или виниром. Индивидуальная эстетика</td>
                                <td className="col3">25000 ₽</td>
                            </tr>
                            <tr>
                                <td className="col1">9.</td>
                                <td className="col2">Протезирование зубов полными съемными пластиночными протезами</td>
                                <td className="col3">45000 ₽</td>
                            </tr>
                            <tr>
                                <td className="col1">10.</td>
                                <td className="col2">Протезирование зуба с использованием имплантата Dentium (Корея), Paltop (Израиль).Коронка керамическая с титановым абатментом</td>
                                <td className="col3">31900 ₽</td>
                            </tr>
                            <tr>
                                <td className="col1">11.</td>
                                <td className="col2">Коррекция прикуса с использованием съемных и несъемных ортопедических конструкций. Релаксирующая каппа</td>
                                <td className="col3">12000 ₽</td>
                            </tr>
                            <tr>
                                <td className="col1">12.</td>
                                <td className="col2">Удаление постоянного зуба</td>
                                <td className="col3">3500 ₽</td>
                            </tr>
                            <tr>
                                <td className="col1">13.</td>
                                <td className="col2">Гингивопластика в области одного зуба</td>
                                <td className="col3">8500 ₽</td>
                            </tr>
                            <tr>
                                <td className="col1">14.</td>
                                <td className="col2">Пластика уздечки языка</td>
                                <td className="col3">6500 ₽</td>
                            </tr>
                            <tr>
                                <td className="col1">15.</td>
                                <td className="col2">Костная пластика челюстно-лицевой области с применением биодеградируемых материалов для увеличения толщины костного гребня</td>
                                <td className="col3">49000 ₽</td>
                            </tr>
                            <tr>
                                <td className="col1">16.</td>
                                <td className="col2">Внутрикостная дентальная имплантация Implantium (Корея)</td>
                                <td className="col3">29900 ₽</td>
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