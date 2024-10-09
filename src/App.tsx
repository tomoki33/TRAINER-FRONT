import React from 'react';
import Home from './pages/Home/Home';
import TrainingManage from './pages/TrainingManage/TrainingManage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import './App.css';

function App() {
  return (
        <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/training-manage" element={<TrainingManage />} />
        </Routes>
      </Router>
  );
}

export default App;
