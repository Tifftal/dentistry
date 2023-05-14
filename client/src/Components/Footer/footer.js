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
                    <a href="/doctors">Команда</a>
                    <a href="/services">Услуги</a>
                    <a href="/about">О компании</a>
                    <a href="/documents">Документы</a>
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
                        <a href="services"><button>Прайс-лист</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
