import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./adminPanel.css";

const AdminPanel = () => {

  return (
    <div className="admin-panel">
      <h2>Admin Panel</h2>
      <div className="data-list">
        <Link to="/admin/panel/callback">Коллбек</Link>
        <Link to="/admin/panel/comment">Комменты</Link>
        <Link to="/admin/panel/teeth/images">Зубки</Link>
      </div>
    </div>
  );
};

export default AdminPanel;
