import React, { useEffect, useState } from 'react';
import { fetchMealHistory } from '../../services/api';

type MealHistory ={
  date: string;
  calories: string;
  nutrition: string;
}

const MealHistory: React.FC = () => {
  const [mealHistory, setMealHistory] = useState<MealHistory|null>(null);

  useEffect(() => {
    fetchMealHistory().then(data => setMealHistory(data));
  }, []);

if (mealHistory === null) {
    return <div>Loading...</div>;
}
else{
  return (
    <div>
      <h2>食事履歴</h2>
          <p>日付: {mealHistory.date}</p>
          <p>摂取カロリー: {mealHistory.calories}</p>
          <p>栄養素: {mealHistory.nutrition}</p>
    </div>
  );
}
}
export default MealHistory; 
