import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./adminPanel.css";
import AdminCallBack from "./CallBack/AdminCallBack";
import AdminComment from "./Comment/AdminComment";
import Pictures from "./Pictures/Pictures";

const AdminPanel = () => {
  const [btn, setBtn] = useState('');
  const [auth, setAuth] = useState(false);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    const data = {
      login: login,
      password: password,
    }

    console.log(data);

    axios.post("http://localhost:8082/checkAuth", data)
    .then(function(response) {
      setAuth(true);
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  return (
    <div className="admin-panel">
      {!auth ? (
        <div>
          <form onSubmit={handleSubmitForm}>
            <input className="login" name="login" placeholder="Логин" id="login" required></input>
            <input className="password" name="password" placeholder="Пароль" id="password" required></input>
            <button type="submit">Давай ебашь</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Панель администратора</h2>
          {btn === 'до/после' ? (
            <Pictures setBtn={setBtn} />
          ) : btn === 'обратный звонок' ? (
            <AdminCallBack setBtn={setBtn} />
          ) : btn === 'комментарии' ? (
            <AdminComment setBtn={setBtn} />
          ) : btn === '' ? (
            <div className="data-list">
              <button onClick={() => { setBtn('обратный звонок') }}>Обратный звонок</button>
              <button onClick={() => { setBtn('комментарии') }}>Комментарии</button>
              <button onClick={() => { setBtn('до/после') }}>До/После</button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
