import "./KidsContainer.css";

import { Link } from "react-router-dom";

const KidsContainer = () => {
    return (
        <section className="kidsSection">
            <div className="kidsOuter">
                <div className="kidsGrid">
                    <div className="kidsInfo">
                        <span className="kidsBlueTag">ДЕТСКАЯ СТОМАТОЛОГИЯ</span>
                        <h1>Лечим детей бережно и без страха</h1>
                        <p>
                            Умеем найти подход к ребёнку: адаптационный приём, объясняем всё
                            простыми словами, работаем аккуратно и с заботой.
                        </p>

                        <Link
                            className="kidsBtn"
                            to="/kids"
                            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
                        >
                            Подробнее
                        </Link>
                    </div>

                    <div className="kidsPhotoBox">
                        <img src="../../IMG/IMG_0542 (1).webp" alt="Детская стоматология" loading="lazy" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KidsContainer;
