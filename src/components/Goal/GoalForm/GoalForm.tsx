import React, { useState } from 'react';

interface Goal {
  weight: number;
  bodyFat: number;
}

const GoalForm: React.FC = () => {
  const [goal, setGoal] = useState<Goal>({ weight: 0, bodyFat: 0 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGoal(prevGoal => ({
      ...prevGoal,
      [name]: Number(value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここで目標管理APIにデータを送信する
    console.log('Goal submitted:', goal);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>目標体重:</label>
        <input type="number" name="weight" value={goal.weight} onChange={handleChange} />
      </div>
      <div>
        <label>目標体脂肪率:</label>
        <input type="number" name="bodyFat" value={goal.bodyFat} onChange={handleChange} />
      </div>
      <button type="submit">目標を設定</button>
    </form>
  );
};

export default GoalForm;