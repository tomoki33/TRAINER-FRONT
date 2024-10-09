import React, { useEffect, useState } from 'react';
// import './MealPlanSummary.css';
import { fetchMealData } from '../../services/api';

type MealData ={
  meal: string;
  calories: number;
}

const MealPlanSummary: React.FC = () => {
  const [mealData, setMealData] = useState<MealData[]>([]);

  useEffect(() => {
    fetchMealData().then(data => setMealData(data));
  }, []);

  return (
    <div className="meal-plan-summary">
      <h2>今日の食事プラン</h2>
      <ul>
        {mealData.map((meal, index) => (
          <li key={index}>
            <strong>{meal.meal}</strong>: {meal.calories} kcal
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealPlanSummary;