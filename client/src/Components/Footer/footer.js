import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'

const Footer = () => {
    return (
        <div>
            <article className="columns-4">
                <div>
                    <p className="footer_left">
                        О возможных противопоказаниях проконсультируйтесь с нашими специалистами</p>
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
                    <p><a href="#">Портфолио</a></p>
                    <p><a href="#">Команда</a></p>
                    <p><a href="#">Услуги</a></p>
                    <p><a href="#">Стоматология Детям</a></p>
                    <p><a href="#">О компании</a></p>
                    <p><a href="#">Блог</a></p>
                    <p><a href="#">FAQ</a></p>
                    <p><a href="#">Анкета пациента</a></p>
                    <p><a href="#">Документы</a></p>
                    <p><a href="#">Контакты</a></p>
                    <p><a href="#">Онлайн-консультация</a></p>
                </div>

                <div className="footer">
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
                <div className='left_information'>
                    <p> +7 929 123 45 67</p>
                    <button type="button" className="btn btn-link">Заказать обратный звонок</button>
                    <p>Московская, 11</p>
                    <button type="button" className="btn btn-link">Изменить клинику</button>

                </div>
            </article>
        </div>
    );
}

export default Footer;
