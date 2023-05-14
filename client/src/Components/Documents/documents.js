import react, { useState } from "react"
import './documents.css'
import DoctorsCarousel from "../Doctors/Carousel/DoctorsCarousel";


const Documents = () => {
    return (
        <div className="backgrDoc">
            <div className="documents">
                <div className="titleDoc">
                    <h1>Документы</h1>
                </div>
                <div>
                    <ul class="breadcrumb">
                        <li><a href="/">Главная</a></li>
                        <li>Документы</li>
                    </ul>
                </div>
                <div className="textDoc">
                    <p>
                        Уважаемые пациенты, в этом разделе вы можете ознакомиться с основными документами, связанными с работой клиники "Формула Улыбки".
                        Свяжитесь с нами, если у вас возникнут вопросы. Свяжитесь с нами, если у вас возникнут вопросы.
                    </p>
                </div>
                <div className="cardDocum">
                    <div className="noPhoto">
                        <div className="stickDocum">
                            <h1>
                                Документы
                            </h1>
                        </div>
                    </div>
                    <div className="DOC">
                        <h3>
                            Лицензия на осуществление медицинской деятельности
                        </h3>
                        <a href="#"><button>Ознакомиться с документом</button></a>
                    </div>
                    <div className="DOC">
                        <h3>
                            Лицензия на осуществление медицинской деятельности
                        </h3>
                        <a href="#"><button>Ознакомиться с документом</button></a>
                    </div>
                    <div className="DOC">
                        <h3>
                            Лицензия на осуществление медицинской деятельности
                        </h3>
                        <a href="#"><button>Ознакомиться с документом</button></a>
                    </div>
                    <div className="DOC">
                        <h3>
                            Лицензия на осуществление медицинской деятельности
                        </h3>
                        <a href="#"><button>Ознакомиться с документом</button></a>
                    </div>
                    <div className="DOC">
                        <h3>
                            Лицензия на осуществление медицинской деятельности
                        </h3>
                        <a href="#"><button>Ознакомиться с документом</button></a>
                    </div>
                    <div className="DOC">
                        <h3>
                            Лицензия на осуществление медицинской деятельности
                        </h3>
                        <a href="#"><button>Ознакомиться с документом</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Documents