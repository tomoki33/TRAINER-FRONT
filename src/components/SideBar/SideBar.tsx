import React from 'react';
import './SideBar.css'; 

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/training-manage">Training-Manage</a></li>
        <li><a href="/meal-manage">Meal-Manage</a></li>
        <li><a href="/goal">Goal</a></li>
        <li><a href="/reminder">Reminder</a></li>
        <li><a href="/config">Config</a></li>
        <li><a href="/config">Logout</a></li>
      </ul>
    </div>
  );
};

export default Sidebar;
