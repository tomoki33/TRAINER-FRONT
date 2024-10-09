import React, { useState } from 'react';
import { submitTrainingProgress } from '../../services/api';

const TrainingProgressForm: React.FC = () => {
  const [weight, setWeight] = useState('');
  const [reps, setReps] = useState('');
  const [duration, setDuration] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitTrainingProgress({ weight, reps, duration });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>重量 (kg):</label>
        <input type="number" value={weight} onChange={e => setWeight(e.target.value)} />
      </div>
      <div>
        <label>回数:</label>
        <input type="number" value={reps} onChange={e => setReps(e.target.value)} />
      </div>
      <div>
        <label>時間 (分):</label>
        <input type="number" value={duration} onChange={e => setDuration(e.target.value)} />
      </div>
      <button type="submit">進捗を記録</button>
    </form>
  );
};

export default TrainingProgressForm;