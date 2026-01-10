import "./FirstContainer.css";

const FirstContainer = ({ onOpen }) => {

    return (
        <div className="firstComponent">
            <div className="WelcomeContainer">
                <div className="intro__media">
                    <video id="video" src="../Video/StomatologyVideo1.mp4" className="intro__media-vide" autoPlay muted loop></video>
                </div>
                <div className="intro__content">
                    <span>
                        <h1>
                            Оставь отзыв после лечения <br />
                            <span className="accent">получи скидку 7%</span>
                        </h1>
                        <p style={{ fontWeight: "500" }}>
                            Наши врачи - профессионалы своего дела
                        </p>
                    </span>
                    <button onClick={onOpen}>Записаться на прием</button>
                </div>
            </div>
        </div>
    )
}

export default FirstContainer;
