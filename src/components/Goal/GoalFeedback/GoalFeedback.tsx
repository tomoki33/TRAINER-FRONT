import React from 'react';

interface FeedbackProps {
  isGoalAchieved: boolean;
}

const GoalFeedback: React.FC<FeedbackProps> = ({ isGoalAchieved }) => {
  return (
    <div>
      {isGoalAchieved ? (
        <div>おめでとうございます！目標を達成しました！</div>
      ) : (
        <div>目標達成まであと少しです！がんばりましょう！</div>
      )}
    </div>
  );
};

export default GoalFeedback;
