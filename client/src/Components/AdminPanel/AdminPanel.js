import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./adminPanel.css";
import AdminCallBack from "./CallBack/AdminCallBack";
import AdminComment from "./Comment/AdminComment";
import Pictures from "./Pictures/Pictures";

const AdminPanel = () => {
  const [btn, setBtn] = useState('');

  return (
    <div className="admin-panel">
      <h2>Панель администратора</h2>
      {btn === 'до/после' ? (
        <Pictures setBtn={setBtn}/>
      ) : btn === 'обратный звонок' ? (
        <AdminCallBack setBtn={setBtn}/>
      ) : btn === 'комментарии' ? (
        <AdminComment setBtn={setBtn}/>
      ) : btn === '' ? (
        <div className="data-list">
          <button onClick={()=>{setBtn('обратный звонок')}}>Обратный звонок</button>
          <button onClick={()=>{setBtn('комментарии')}}>Комментарии</button>
          <button onClick={()=>{setBtn('до/после')}}>До/После</button>
        </div>
      ) : null}

    </div>
  );
};

export default AdminPanel;
