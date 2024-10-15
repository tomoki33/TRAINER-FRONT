import React from 'react';
import { useNavigate } from 'react-router-dom';
import TrainingSummary from '../../components/TrainingSummary/TrainingSummary';
import MealPlanSummary from '../../components/MealPlanSummary/MealPlanSummary';
import Progress from '../../components/Progress/Progress';
import Calendar from '../../components/Calendar/Calendar';


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