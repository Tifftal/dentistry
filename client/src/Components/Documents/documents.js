import React from 'react'
import './documents.css'


const Documents = () => {
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
                    <div>
                    <a href="../DOC/ЕГРЮЛ.pdf" download><button>ЕГРЮЛ</button></a>
                    <a href="../DOC/Адреса и телефоны органов исполнительной власти.pdf" download><button>Адреса и телефоны органов ИВ</button></a>
                    <a href="../DOC/Заключение СЭС 2018.pdf" download><button>Заключение СЭС 2018</button></a>
                    <a href="../DOC/Закон о защите прав потребителей.pdf" download><button>Закон о защите прав потребителей</button></a>
                    <a href="../DOC/Лицензия действующая.pdf" download><button>Лицензия</button></a>
                    <a href="../DOC/Положение об условиях, порядке, форме предоставления медицинских услуг.pdf" download><button>Положения предоставления медицинских услуг</button></a>
                    <a href="../DOC/Правила записи на первичный прием (консультацию, обследование).pdf" download><button>Правила записи</button></a>
                    <a href="../DOC/Программа государственных гарантий бесплатного оказания гражданам медицинской помощи.pdf" download><button>Гарантии бесплатного оказания медицинской помощи</button></a>
                    <a href="../DOC/Распоряжение об утверждении перечня жизненно необходимых и важнейших лекарственных препаратов.pdf" download><button>Распоряжение об утверждении лекарственных препаратов</button></a>
                    <a href="../DOC/Реквизиты ООО ЛАДА банк Кубань Кредит.doc" download><button>Реквизиты ООО ЛАДА</button></a>
                    <a href="../DOC/Сан Эпид закл 2017.pdf" download><button>СЭС Заключение</button></a>
                    <a href="../DOC/Свидетельсво ИФНС 3.pdf" download><button>Свидетельсво ИФНС</button></a>
                    <a href="../DOC/Федеральный закон от 30 марта 1999 г N 52 ФЗ О санитарно эпидемиологическом благ.pdf" download><button>ФЗ "О санитарно-эпидемиологическом благополучии населения"</button></a>
                    </div>
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