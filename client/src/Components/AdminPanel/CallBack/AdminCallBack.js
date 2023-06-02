import React, { useEffect, useState } from "react";
import axios from "axios";
import "./adminCallBack.css";

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

const AdminCallBack = (props) => {
  const [data, setData] = useState([]);

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);

    const year = date.getFullYear();
    const month = m[String(date.getMonth() + 1).padStart(2, '0')];
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    return `${hours}:${minutes}:${seconds} ${day} ${month} ${year} г.`;
  };

  // Пример использования в функции fetchData
  const fetchData = async () => {
    try {
      const response = await axios.get("http://45.67.56.80:8082/callback/get");
      const callbackData = response.data;

      const formattedData = callbackData.map(callback => ({
        ...callback,
        date: formatDateTime(callback.date),
      }));

      setData(formattedData);
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleDelete = async (id) => {
    try {
      await axios.post(`http://45.67.56.80:8082/callback/delete/${id}`);
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="admin-panel">
      <button onClick={() => { props.setBtn('') }} className="back-Btn">Назад</button>
      <h3 style={{color: "rgba(0, 0, 0, 0.6)"}}>Обратный звонок</h3>
      <div className="data-list">
        {data.map((item) => (
          <div key={item.id} className="data-item" style={{marginBottom: "10px"}}>
            <p><strong>Имя:</strong> {item.name}</p>
            <p><strong>Номер:</strong> {item.number}</p>
            <p><strong>Время:</strong> {item.date}</p>
            <button
              onClick={() => handleDelete(item.id)}
              className="delete-button"
              style={{height: "35px", fontSize: "15px"}}
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
