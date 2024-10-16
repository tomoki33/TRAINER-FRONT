import React, { useEffect, useState } from 'react';
import TrainingSummary from '../../components/MealManage/MealDetail/MealDetail';
import MealDetail from '../../components/MealManage/MealDetail/MealDetail';
import MealHistory from '../../components/MealManage/MealHistory/MealHistory';
import MealProgress from '../../components/MealManage/MealProgress/MealProgress';
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
    </div>
  );
};

export default MealMenu;
