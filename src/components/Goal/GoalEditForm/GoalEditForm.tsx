import React, { useState, useEffect } from 'react';

interface Goal {
  weight: number;
  bodyFat: number;
}

const GoalEditForm: React.FC = () => {
  const [goal, setGoal] = useState<Goal>({ weight: 0, bodyFat: 0 });

  useEffect(() => {
    // ここで目標管理APIから既存の目標を取得してセット
    const fetchGoal = async () => {
      // API呼び出しの擬似例
      const existingGoal = { weight: 70, bodyFat: 20 }; // サンプルデータ
      setGoal(existingGoal);
    };

    fetchGoal();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGoal(prevGoal => ({
      ...prevGoal,
      [name]: Number(value),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここで目標管理APIにデータを送信して目標を更新
    console.log('Goal updated:', goal);
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
      <button type="submit">目標を更新</button>
    </form>
  );
};

export default GoalEditForm;
