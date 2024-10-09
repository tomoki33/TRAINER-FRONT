import React, { useEffect, useState } from 'react';
// import './Progress.css';
import { fetchProgressData } from '../../services/api';

interface ProgressData {
  date: string;
  weight: number;
  bodyFat: number;
}

const Progress: React.FC = () => {
  const [progressData, setProgressData] = useState<ProgressData[]>([]);

  useEffect(() => {
    fetchProgressData().then(data => setProgressData(data));
  }, []);

  return (
    <div className="progress">
      <h2>進捗状況</h2>
      <ul>
        {progressData.map((progress, index) => (
          <li key={index}>
            <strong>{progress.date}</strong>: 体重 {progress.weight} kg, 体脂肪率 {progress.bodyFat}%
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Progress;