import React from "react";
import "./Comments.css"
import { useState } from 'react';
import Comment from '../../Comment/Comment';


const Comments = () => {
    const [isOpen, setIsOpen] = useState(false);

    const HandleOpenNote = () => {
        setIsOpen(true)
    }

    const HandleCloseNote = () => {
        setIsOpen(false)
    }
    return (
        <div className="comments">
            {isOpen && (
                <Comment onClose={HandleCloseNote} setIsOpen={setIsOpen} />
            )}
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
                    <a href="#"><button onClick={HandleOpenNote}>Оставить отзыв</button></a>
                </div>
            </div>
            <div className="Otz">
                <h1>Иванов Иван</h1>
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
