import React from 'react';

import GoalForm from '../../components/Goal/GoalForm/GoalForm';
import GoalEditForm from '../../components/Goal/GoalEditForm/GoalEditForm';
import GoalFeedback from '../../components/Goal/GoalFeedback/GoalFeedback';
import ProgressGraph from '../../components/Goal/ProgressGraph/ProgressGraph';



const Goal: React.FC = () => {

  return (
    <div className="Goal">
      <h1>目標管理</h1>
      <GoalForm/>
      <GoalEditForm/>
      <GoalFeedback isGoalAchieved={false}/>
      <ProgressGraph/>
    </div>
  );
};

export default Goal;