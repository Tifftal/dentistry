import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./adminPanel.css";

const AdminPanel = () => {

  return (
    <div className="admin-panel">
      <h2>Панель администратора</h2>
      <div className="data-list">
        <Link to="/admin/panel/callback"><button>Обратный звонок</button></Link>
        <Link to="/admin/panel/comment"><button>Комментарии</button></Link>
        <Link to="/admin/panel/teeth/images"><button>До/После</button></Link>
      </div>
    </div>
  );
};

export default AdminPanel;
