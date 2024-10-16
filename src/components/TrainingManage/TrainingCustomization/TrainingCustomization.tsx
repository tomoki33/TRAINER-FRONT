import React, { useState } from 'react';
import { updateTrainingSettings } from '../../../services/api';

const TrainingCustomization: React.FC = () => {
  const [sets, setSets] = useState('');
  const [weight, setWeight] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateTrainingSettings({ sets, weight });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>セット数:</label>
        <input type="number" value={sets} onChange={e => setSets(e.target.value)} />
      </div>
      <div>
        <label>重量 (kg):</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
      </div>
      <button type="submit">設定を更新</button>
    </form>
  );
};

export default TrainingCustomization;