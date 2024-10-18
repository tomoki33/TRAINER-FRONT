import React, { useState } from 'react';

interface TrainingSettingsProps {
  onSubmit: (settings: { frequency: number; difficulty: string }) => void;
}

const TrainingSettings: React.FC<TrainingSettingsProps> = ({ onSubmit }) => {
  const [frequency, setFrequency] = useState<number>(3); // 初期値: 3回/週
  const [difficulty, setDifficulty] = useState<string>('beginner'); // 初期値: beginner

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ frequency, difficulty });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>トレーニング頻度（週）:</label>
        <input
          type="number"
          value={frequency}
          onChange={(e) => setFrequency(Number(e.target.value))}
          min="1"
          max="7"
        />
      </div>
      <div>
        <label>トレーニング難易度:</label>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option value="beginner">初心者</option>
          <option value="intermediate">中級</option>
          <option value="advanced">上級</option>
        </select>
      </div>
      <button type="submit">設定保存</button>
    </form>
  );
};

export default TrainingSettings;
