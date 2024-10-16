import React from 'react';
import { useNavigate } from 'react-router-dom';
import TrainingSummary from '../../components/TrainingManage/TrainingSummary/TrainingSummary';
import MealPlanSummary from '../../components/Home/MealPlanSummary/MealPlanSummary';
import Progress from '../../components/Home/Progress/Progress';
import Calendar from '../../components/Home/Calendar/Calendar';


const Home: React.FC = () => {

  return (
    <div className="home">
      <h1>ホーム</h1>
      <TrainingSummary />
      <MealPlanSummary />
      <Progress />
      <Calendar />
    </div>
  );
};

export default Home;