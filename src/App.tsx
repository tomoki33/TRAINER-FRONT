import React from 'react';
import Home from './pages/Home/Home';
import TrainingManage from './pages/TrainingManage/TrainingManage';
import MealManage from './pages/MealManage/MealManage';
import Goal from './pages/Goal/Goal';
import Config from './pages/Config/Config';
import Reminder from './pages/Reminder/Reminder';
import Login from './pages/Login/Login';
import AdminHome from './pages/AdminHome/AdminHome';
import AdminInput from './pages/AdminInput/AdminInput';



import { BrowserRouter as Router, Route, Routes,Navigate, useLocation  } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import AdminSideBar from './components/SideBar/AdminSideBar';

import './App.css';

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

function AppLayout() {
  const location = useLocation();

  // サイドバーを表示するルートを指定
  const excludedRoutes = ['/login', '/admin-home', '/admin-input'];
  const showSideBar = !excludedRoutes.includes(location.pathname);
  const adminRoutes = ['/admin-home','/admin-input',];
  const showAdminSideBar = adminRoutes.includes(location.pathname);

  return (
      <div style={{ display: 'flex' }}>
        {showAdminSideBar && <AdminSideBar />}
        {showSideBar && <SideBar />}
          <div style={{ marginLeft: '250px', padding: '20px', flex: 1, height: '100vh' }}>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/training-manage" element={<TrainingManage />} />
            <Route path="/meal-manage" element={<MealManage />} />
            <Route path="/goal" element={<Goal />} />
            <Route path="/config" element={<Config />} />
            <Route path="/reminder" element={<Reminder />} />
            <Route path="/login" element={<Login/>} />
            <Route path="/admin-home" element={<AdminHome/>} />
            <Route path="/admin-input" element={<AdminInput/>} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
