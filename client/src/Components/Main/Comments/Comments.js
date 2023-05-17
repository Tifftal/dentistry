import React from "react";
import "./Comments.css"

const Comments = () => {
    return (
        <div className="comments">
            <h1>
                Отзывы
            </h1>
            <div className="ComBtn">
                <div>
                    <p>
                        Мы будем рады, если вы оставите свой отзыв
                        и поделитесь впечатлениями о посещении
                        стоматологической клиники «Формула Улыбки».
                        Мы стараемся заботиться о наших пациентах и
                        поддерживать уровень, оказываемых услуг.
                        Ваши комментарии и пожелания будут учтены,
                        а положительные сообщения помогут новым пациентам
                        утвердиться в своем выборе.
                    </p>
                </div>
                <div className="BtnOtz">
                    <a href="#"><button>Оставить отзыв</button></a>
                </div>
            </div>
            <div className="Otz">
                <h1>Иванов Иван</h1>
                <p>Наш пациент из г. Краснодар</p>
                <h2>21.02.2023</h2>
                <p><b>Тут текст отзыва</b>   ed ut
                    perspiciatis unde omnis i
                    ste natus error sit voluptatem
                    accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae
                    ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo.
                    Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi
                    nesciunt.
                </p>
            </div>
            <div className="Otz">
                <h1>Иванов Иван</h1>
                <p>Наш пациент из г. Краснодар</p>
                <h2>21.02.2023</h2>
                <p><b>Тут текст отзыва</b>   ed ut
                    perspiciatis unde omnis i
                    ste natus error sit voluptatem
                    accusantium doloremque laudantium,
                    totam rem aperiam, eaque ipsa quae
                    ab illo inventore veritatis et quasi
                    architecto beatae vitae dicta sunt explicabo.
                    Nemo enim ipsam voluptatem quia voluptas sit
                    aspernatur aut odit aut fugit, sed quia consequuntur
                    magni dolores eos qui ratione voluptatem sequi
                    nesciunt.
                </p>
            </div>
        </div>
    )
}

export default Comments;
