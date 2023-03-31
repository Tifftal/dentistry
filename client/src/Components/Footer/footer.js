import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer_left">
                    <p>
                        О возможных противопоказаниях проконсультируйтесь с нашими специалистами
                    </p>
                    <div className='socialBarFooter'>

                        <div className='scBtnFooter'>
                            <a href="#"><img src="../IMG/free-icon-whatsapp-3670302.png" width="90%" height="90%" /></a>
                        </div>
                        <div className='scBtnFooter'>
                            <a href="#"><img src="../IMG/free-icon-vkontakte-4494490.png" width="90%" height="90%" /></a>
                        </div>
                        <div className='scBtnFooter'>
                            <a href="#"><img src="../IMG/free-icon-telegram-2111710.png" width="90%" height="90%" /></a>
                        </div>
                    </div>
                </div>

                <div className="footer_menu">
                    <a href="#">Портфолио</a>
                    <a href="#">Команда</a>
                    <a href="#">Услуги</a>
                    <a href="#">Стоматология Детям</a>
                    <a href="#">О компании</a>
                    <a href="#">Блог</a>
                    <a href="#">FAQ</a>
                    <a href="#">Анкета пациента</a>
                    <a href="#">Документы</a>
                    <a href="#">Контакты</a>
                    <a href="#">Онлайн-консультация</a>
                </div>

                <div className="footer_form">
                    <form className='Form'>
                        <input className='Pole' type="text" name="name" placeholder="Имя" id="name" required />
                        <input type="text" name="name" placeholder="Телефон" id="name" required />
                        <input type="text" name="name" placeholder="Причина обращения" id="name" required />
                        <div className='FormDiv'>
                            <input type="checkbox" name="intensive-courses" id="courses" unchecked />
                            <label for="courses">
                                Выражаю свое согласие на обработку персональных данных в соответствии с <a href="#">Федеральном законом "О персональных данных" от 27.07.2006 № 152-ФЗ</a>, с условиями обработки персональных данных ознакомлен(а).
                            </label>
                        </div>
                        <button type="submit">Отправить заявку</button>
                    </form>
                </div>
                <div className='right_information'>
                    <div className='infFooter'>
                        <div className='iconFooter'>
                            <img src="../IMG/phone-call.png" />
                        </div>
                        <div className='textFooter'>
                            <p>+7 123 456 78 90</p>
                        </div>
                        <div className='iconFooter'>
                            <img src="../IMG/placeholder.png" />
                        </div>
                        <div className='textFooter'>
                            <p>Москва, Московская, 11</p>
                        </div>
                    </div>
                    <div className='way'>
                        <button>Как добраться {">>"}</button>
                    </div>
                    <div className='price'>
                        <button>Прайс-лист</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
