import React, { useEffect, useState } from 'react';
import TrainingSummary from '../../components/MealDetail/MealDetail';
import MealDetail from '../../components/MealDetail/MealDetail';
import MealHistory from '../../components/MealHistory/MealHistory';
import MealProgress from '../../components/MealProgress/MealProgress';
import { useNavigate } from 'react-router-dom';


const MealMenu: React.FC = () => {
  const navigate = useNavigate();

  const navigateToMealManage = () => {
    navigate('/');
  };
  return (
    <div>
      <h2>食事メニュー</h2>
      <MealDetail mealId={0}/>
      <MealHistory/>
      <MealProgress/>
      <button onClick={navigateToMealManage}>ホーム画面へ</button>
    </div>
  );
};

export default MealMenu;
