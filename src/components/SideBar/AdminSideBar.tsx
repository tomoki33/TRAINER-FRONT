import React from 'react';
import './AdminSideBar.css'; 

const AdminSidebar: React.FC = () => {
  return (
    <div className="admin-sidebar">
      <h2>Menu</h2>
      <ul>
        <li><a href="/admin-home">Home</a></li>
        <li><a href="/admin-input">顧客情報</a></li>
      </ul>
    </div>
  );
};

export default AdminSidebar;