import React, { useEffect, useState } from 'react';
import { fetchTrainingMenu } from '../../services/api';

type TrainingItem ={
  exercise: string;
  sets: number;
  reps: number;
  duration: string;
}

const TrainingMenu: React.FC = () => {
  const [trainingMenu, setTrainingMenu] = useState<TrainingItem[]>([]);

  useEffect(() => {
    fetchTrainingMenu().then(data => setTrainingMenu(data));
  }, []);

  return (
    <div className="training-menu">
      <h2>今日のトレーニングメニュー</h2>
      <ul>
        {trainingMenu.map((item, index) => (
          <li key={index}>
            <strong>{item.exercise}</strong>: {item.sets} セット x {item.reps} 回 ({item.duration})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainingMenu;