import React from "react";
import "./Comments.css"
import { useState, useEffect } from 'react';
import Comment from '../../Comment/Comment';
import axios from "axios";

const Comments = () => {
    const [isOpen, setIsOpen] = useState(false);

    const HandleOpenNote = () => {
        setIsOpen(true)
    }

    const HandleCloseNote = () => {
        setIsOpen(false)
    }

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8082/comments/getAllForUser"
            );
            const publishedComments = response.data;
            setComments(publishedComments);
        } catch (error) {
            console.log(error);
        }
    };

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
                {comments.map((comment) => (
                    <div key={comment.id}>
                        <h1>{comment.name}</h1>
                        <h2>{comment.date}</h2>
                        <p>{comment.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Comments;
