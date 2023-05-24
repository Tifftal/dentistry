import React, { useEffect, useState } from "react";
import axios from "axios";
import "./adminCallBack.css";

const AdminCallBack = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://45.12.72.31:8082/callback/get");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.post(`http://45.12.72.31:8082/callback/delete/${id}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-panel">
      <h2>Обратный звонок</h2>
      <div className="data-list">
        {data.map((item) => (
          <div key={item.id} className="data-item">
            <p><strong>Имя:</strong> {item.name}</p>
            <p><strong>Номер:</strong> {item.number}</p>
            <p><strong>Время:</strong> {item.date}</p>
            <button
              onClick={() => handleDelete(item.id)}
              className="delete-button"
            >
              Удалить
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminCallBack;
