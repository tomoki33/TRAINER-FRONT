import React from 'react';
import ReminderComponent from '../../components/Reminder/Reminders/Reminders';
import GoalReminder from '../../components/Reminder/GoalReminder/GoalReminder';

const App: React.FC = () => {
  return (
    <div>
      <ReminderComponent />
      <GoalReminder />
    </div>
  );
};

export default App;
