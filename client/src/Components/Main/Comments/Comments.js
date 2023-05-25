import React from "react";
import "./Comments.css"
import { useState, useEffect } from 'react';
import Comment from '../../Comment/Comment';
import axios from "axios";

const m = {
    "01" : "января",
    "02" : "февраля",
    "03" : "марта",
    "04" : "апреля",
    "05" : "мая",
    "06" : "июня",
    "07" : "июля",
    "08" : "августа",
    "09" : "сентября",
    "10" : "октября",
    "11" : "ноября",
    "12" : "декабря"
}

const Comments = () => {
    const [isOpen, setIsOpen] = useState(false);

    const HandleOpenNote = () => {
        setIsOpen(true)
    }

    const HandleCloseNote = () => {
        setIsOpen(false)
    }

    const [comments, setComments] = useState([]);

    const formatDateTime = (dateTime) => {
        const date = new Date(dateTime);

        const year = date.getFullYear();
        const month = m[String(date.getMonth() + 1).padStart(2, '0')];
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');

        return `${hours}:${minutes} ${day} ${month} ${year} г.`;
    };

    // Пример использования в функции fetchData
    const fetchData = async () => {
        try {
            const response = await axios.get("http://45.12.72.31:8082/comments/getAllForUser");
            const comments = response.data;

            const formattedComments = comments.map(comment => ({
                ...comment,
                date: formatDateTime(comment.date),
            }));

            setComments(formattedComments);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [fetchData]);

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
            <div >
                {comments.map((comment) => (
                    <div className="Otz" key={comment.id}>
                        <h2>{comment.name}</h2>
                        <h6>{comment.date}</h6>
                        <p>{comment.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Comments;
