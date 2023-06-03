import React, { useState } from "react";
import axios from "axios";

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

    axios.post("https://formulaulybki.ru/api/checkAuth", data)
      .then(function (response) {
        if (response.data.status === "done") {
          setAuth(true);
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <div className="admin-panel">
      {!auth ? (
        <div className="auth">
          <form onSubmit={handleSubmitForm} className="auth-form">
            <h2>Вход</h2>
            <input className="login" name="login" placeholder="Логин" id="login" required></input>
            <input className="password" name="password" placeholder="Пароль" id="password" type="password" required></input>
            <button type="submit">Войти</button>
          </form>
        </div>
      ) : (
        <div className="AdminTitle">
        <div className="header">
          <h2>Панель администратора</h2>
          </div>
          {btn === 'до/после' ? (
            <Pictures setBtn={setBtn} />
          ) : btn === 'обратный звонок' ? (
            <AdminCallBack setBtn={setBtn} />
          ) : btn === 'комментарии' ? (
            <AdminComment setBtn={setBtn} />
          ) : btn === '' ? (
            <div className="btn-list">
              <button onClick={() => { setBtn('обратный звонок') }} style={{ width: "200px" }}>Обратный звонок</button>
              <button onClick={() => { setBtn('комментарии') }} style={{ width: "200px" }}>Комментарии</button>
              <button onClick={() => { setBtn('до/после') }} style={{ width: "200px" }}>До/После</button>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
