import React, { useState } from 'react';

interface NotificationSettingsProps {
  onSubmit: (settings: { enabled: boolean; time: string }) => void;
}

const NotificationSettings: React.FC<NotificationSettingsProps> = ({ onSubmit }) => {
  const [enabled, setEnabled] = useState<boolean>(true);
  const [time, setTime] = useState<string>('08:00');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ enabled, time });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>プッシュ通知を有効にする:</label>
        <input
          type="checkbox"
          checked={enabled}
          onChange={(e) => setEnabled(e.target.checked)}
        />
      </div>
      {enabled && (
        <div>
          <label>通知時間:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>
      )}
      <button type="submit">設定保存</button>
    </form>
  );
};

export default NotificationSettings;
