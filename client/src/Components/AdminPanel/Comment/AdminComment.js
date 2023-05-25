import React, { useEffect, useState } from "react";
import axios from "axios";
import "./adminComment.css";

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

const AdminComment = (props) => {
  const [pendingComments, setPendingComments] = useState([]);
  const [publishedComments, setPublishedComments] = useState([]);

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    
    const year = date.getFullYear();
    const month = m[String(date.getMonth() + 1).padStart(2, '0')];
    const day = String(date.getDate()).padStart(2, '0');
  
    return `${day} ${month} ${year} г.`;
  };
  
  // Пример использования в функции fetchData
  const fetchData = async () => {
    try {
      const response = await axios.get("http://45.12.72.31:8082/comments/getAllForAdmin");
      const comments = response.data;
  
      const formattedComments = comments.map(comment => ({
        ...comment,
        date: formatDateTime(comment.date),
      }));
  
      setPendingComments(formattedComments.filter(comment => comment.status === "pending"));
      setPublishedComments(formattedComments.filter(comment => comment.status === "published"));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = async (id) => {
    try {
      await axios.post(`http://45.12.72.31:8082/comments/delete/${id}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  const handlePublish = async (id) => {
    try {
      await axios.post(`http://45.12.72.31:8082/comments/publish/${id}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-comment">
      <button onClick={() => { props.setBtn('') }} className="back-Btn">Назад</button>
      <h2>Комментарии</h2>
      <div>
        <h3>Ожидающие публикации</h3>
        <table className="table-Coms">
          <thead>
            <tr>
              <th className="number">Дата</th>
              <th>Имя</th>
              <th className="number">Номер</th>
              <th>Комментарий</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {pendingComments.map((comment) => (
              <tr key={comment.id}>
                <td className="number">{comment.date}</td>
                <td>{comment.name}</td>
                <td className="number">{comment.number}</td>
                <td>{comment.comment}</td>
                <td>
                  <button
                    onClick={() => handlePublish(comment.id)}
                    className="publish-button"
                  >
                    Опубликовать
                  </button>
                  <button
                    onClick={() => handleDelete(comment.id)}
                    className="delete-button"
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3>Опубликованные комментарии</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Имя</th>
              <th className="number">Номер</th>
              <th>Комментарий</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {publishedComments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.name}</td>
                <td className="number">{comment.number}</td>
                <td>{comment.comment}</td>
                <td>
                  <button
                    onClick={() => handleDelete(comment.id)}
                    className="delete-button"
                  >
                    Удалить
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminComment;
