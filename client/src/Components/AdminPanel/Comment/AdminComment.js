import React, { useEffect, useState } from "react";
import axios from "axios";
import "./adminComment.css";

const AdminComment = () => {
  const [pendingComments, setPendingComments] = useState([]);
  const [publishedComments, setPublishedComments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://45.12.72.31:8082/comments/getAllForAdmin"
      );
      const comments = response.data;
      setPendingComments(comments.filter(comment => comment.status === "pending"));
      setPublishedComments(comments.filter(comment => comment.status === "published"));
    } catch (error) {
      console.log(error);
    }
  };

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
      <h2>Комментарии</h2>
      <div>
        <h3>Ожидающие публикации</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Имя</th>
              <th>Номер</th>
              <th>Комментарий</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {pendingComments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.name}</td>
                <td>{comment.number}</td>
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
              <th>Номер</th>
              <th>Комментарий</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {publishedComments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.name}</td>
                <td>{comment.number}</td>
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
