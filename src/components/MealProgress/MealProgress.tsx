import React, { useState } from 'react';

const MealProgress: React.FC = () => {
  const [calories, setCalories] = useState<number>(0);

  const handleSubmit = async (e: React.FormEvent) => {
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>食事進捗の記録</h2>
      <label>
        摂取カロリー:
        <input
          type="number"
          value={calories}
          onChange={(e) => setCalories(Number(e.target.value))}
        />
      </label>
      <button type="submit">記録する</button>
    </form>
  );
};

export default MealProgress;
