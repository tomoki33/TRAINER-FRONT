import React, { useEffect, useState } from 'react';
import { fetchTrainingHistory } from '../../../services/api';
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

type TrainingHistoryItem = {
  date: string;
  progress: number;
}

const TrainingHistory: React.FC = () => {
  const [history, setHistory] = useState<TrainingHistoryItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setLoading(true);
        const data = await fetchTrainingHistory();
        setHistory(data);
      } catch (err) {
        setError('データの取得に失敗しました。');
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) {
    return <div>ロード中...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  const data = {
    labels: history.map(item => item.date),
    datasets: [
      {
        label: 'トレーニング進捗',
        data: history.map(item => item.progress),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1, // 曲線のスムージング
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'トレーニング履歴',
      },
    },
  };

  return (
    <div className="training-history">
      <h2>トレーニング履歴</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default TrainingHistory;
