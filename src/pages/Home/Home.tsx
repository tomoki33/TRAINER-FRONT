import React from 'react';
import { useNavigate } from 'react-router-dom';
import TrainingSummary from '../../components/TrainingSummary/TrainingSummary';
import MealPlanSummary from '../../components/MealPlanSummary/MealPlanSummary';
import Progress from '../../components/Progress/Progress';
import Calendar from '../../components/Calendar/Calendar';


const Home: React.FC = () => {
  const navigate = useNavigate();

  const navigateToTrainingManage = () => {
    navigate('/training-manage');
  };

  const navigateToMealManage = () => {
    navigate('/meal-manage');
  };

  return (
    <div className="home">
      <h1>ホーム</h1>
      <TrainingSummary />
      <MealPlanSummary />
      <Progress />
      <Calendar />
      <button onClick={navigateToTrainingManage}>トレーニング管理へ</button>
      <button onClick={navigateToMealManage}>食事管理へ</button>
    </div>
  );
};

export default Home;