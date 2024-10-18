import React from 'react';
import Home from './pages/Home/Home';
import TrainingManage from './pages/TrainingManage/TrainingManage';
import MealManage from './pages/MealManage/MealManage';
import Goal from './pages/Goal/Goal';
import Config from './pages/Config/Config';
import Reminder from './pages/Reminder/Reminder';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';



import './App.css';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <SideBar />
        <div style={{ marginLeft: '250px', padding: '20px', flex: 1, height: '100vh' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/training-manage" element={<TrainingManage />} />
            <Route path="/meal-manage" element={<MealManage />} />
            <Route path="/goal" element={<Goal />} />
            <Route path="/config" element={<Config />} />
            <Route path="/reminder" element={<Reminder />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
