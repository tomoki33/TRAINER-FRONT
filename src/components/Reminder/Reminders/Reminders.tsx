import React, { useState, useEffect } from 'react';

// リマインダーAPIからデータを取得する関数
const fetchReminders = async () => {
  try {
    const response = await fetch('/api/reminders'); // APIエンドポイント
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching reminders:', error);
    return [];
  }
};

const ReminderComponent: React.FC = () => {
  const [reminders, setReminders] = useState<any[]>([]);

  useEffect(() => {
    const getReminders = async () => {
      const fetchedReminders = await fetchReminders();
      setReminders(fetchedReminders);
    };
    getReminders();
  }, []);

  return (
    <div>
      <h2>トレーニング・食事リマインダー</h2>
      <ul>
        {reminders.map((reminder, index) => (
          <li key={index}>
            {reminder.title}: {reminder.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReminderComponent;
