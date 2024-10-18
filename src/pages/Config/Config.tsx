import React from 'react';

import MealSettings from '../../components/Config/MealSettings/MealSettings';
import NotificationSettings from '../../components/Config/NotificationSettings/NotificationSettings';
import TrainingSettings from '../../components/Config/TrainingSettings/TrainingSettings';


const Goal: React.FC = () => {

  return (
    <div className="Goal">
      <h1>設定</h1>
      <TrainingSettings onSubmit={function (settings: { frequency: number; difficulty: string; }): void {
              throw new Error('Function not implemented.');
          } }/>
      <MealSettings onSubmit={function (settings: { mealType: string; allergies: string[]; }): void {
              throw new Error('Function not implemented.');
          } }/>
      <NotificationSettings onSubmit={function (settings: { enabled: boolean; time: string; }): void {
              throw new Error('Function not implemented.');
          } }/>
    </div>
  );
};

export default Goal;