import React, { useState, useEffect } from 'react';

// 目標達成リマインダーを定期的に表示する関数
const GoalReminder: React.FC = () => {
  const [goalReminder, setGoalReminder] = useState<string | null>(null);

  useEffect(() => {
    const fetchGoalReminder = async () => {
      try {
        const response = await fetch('/api/goal-reminders');
        const data = await response.json();
        setGoalReminder(data.message);
      } catch (error) {
        console.error('Error fetching goal reminder:', error);
      }
    };

    const intervalId = setInterval(fetchGoalReminder, 60000); // 1分ごとにチェック
    return () => clearInterval(intervalId); // コンポーネントがアンマウントされたらクリーンアップ
  }, []);

  return (
    <div>
      <h2>目標達成リマインダー</h2>
      {goalReminder && <p>{goalReminder}</p>}
    </div>
  );
};

export default GoalReminder;
