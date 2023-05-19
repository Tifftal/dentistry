import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8082/callback/get");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8082/callback/delete/${id}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <div className="data-list">
        {data.map((item) => (
          <div key={item.id} className="data-item">
            <p><strong>Name:</strong> {item.name}</p>
            <p><strong>Number:</strong> {item.number}</p>
            <p><strong>Time:</strong> {item.time}</p>
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

export default AdminPanel;
