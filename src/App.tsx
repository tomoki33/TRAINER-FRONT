import React from 'react';
import Home from './pages/Home/Home';
import TrainingManage from './pages/TrainingManage/TrainingManage';
import MealManage from './pages/MealManage/MealManage';
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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
