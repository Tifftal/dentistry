import react, { useState } from "react"
import './documents.css'
import Note from "../Popup/Note/Note";

const Documents = () => {
    const [isOpen, setIsOpen] = useState(false);

    const HandleOpenNote = () => {
        setIsOpen(true)
    }

    const HandleCloseNote = () => {
        setIsOpen(false)
    }
    return (
        <div className="backgrDoc">
            {isOpen && (
                <Note onClose={HandleCloseNote} setIsOpen={setIsOpen} />
            )}
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
                        Уважаемые пациенты, в этом разделе вы можете ознакомиться с основными документами, связанными с работой клиники «SimClinic».
                        Свяжитесь с нами, если у вас возникнут вопросы. Свяжитесь с нами, если у вас возникнут вопросы.
                    </p>
                </div>
                <div className="documBtn">
                    <button onClick={HandleOpenNote}>Свяжитесь с нами, если возникнут вопросы</button>
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
                    {/* <div className="ph">
                        <img src="../../IMG/DSC02687-2.jpg" />
                        <h3>
                            Иванов Иван Иванович
                        </h3>
                        <p>
                            Терапевт
                        </p>
                    </div>

                    <div className="ph">
                        <img src="../../IMG/DSC02687-2.jpg" />
                        <h3>
                            Иванов Иван Иванович
                        </h3>
                        <p>
                            Терапевт
                        </p>
                    </div>

                    <div className="ph">
                        <img src="../../IMG/DSC02687-2.jpg" />
                        <h3>
                            Иванов Иван Иванович
                        </h3>
                        <p>
                            Терапевт
                        </p>
                    </div>

                    <div className="ph">
                        <img src="../../IMG/DSC02687-2.jpg" />
                        <h3>
                            Иванов Иван Иванович
                        </h3>
                        <p>
                            Терапевт
                        </p>
                    </div>

                    <div className="ph">
                        <img src="../../IMG/DSC02687-2.jpg" />
                        <h3>
                            Иванов Иван Иванович
                        </h3>
                        <p>
                            Терапевт
                        </p>
                    </div>

                    <div className="ph">
                        <img src="../../IMG/DSC02687-2.jpg" />
                        <h3>
                            Иванов Иван Иванович
                        </h3>
                        <p>
                            Терапевт
                        </p>
                    </div>

                    <div className="ph">
                        <img src="../../IMG/DSC02687-2.jpg" />
                        <h3>
                            Иванов Иван Иванович
                        </h3>
                        <p>
                            Терапевт
                        </p>
                    </div>
                    <div className="ph">
                        <img src="../../IMG/DSC02687-2.jpg" />
                        <h3>
                            Иванов Иван Иванович
                        </h3>
                        <p>
                            Терапевт
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Documents