import React from 'react';
import './SideBar.css'; 

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/training-manage">training-manage</a></li>
        <li><a href="/meal-manage">meal-manage</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
