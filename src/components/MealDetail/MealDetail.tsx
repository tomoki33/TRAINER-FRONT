import React, { useEffect, useState } from 'react';
import { fetchMealDetail } from '../../services/api';


const MealDetail: React.FC<{ mealId: number }> = ({ mealId }) => {
  const [mealDetail, setMealDetail] = useState<any>(null);

  useEffect(() => {
    fetchMealDetail().then(data => setMealDetail(data));
  }, []);

  if (!mealDetail) return <div>Loading...</div>;

  return (
    <div>
      <h2>{mealDetail.name}の詳細</h2>
      <p>カロリー: {mealDetail.calories}</p>
      <p>栄養成分: {mealDetail.nutrition}</p>
      <a href={mealDetail.recipeLink}>レシピを見る</a>
    </div>
  );
};

export default MealDetail;
