import React, { useEffect, useState } from 'react';
// import './Calendar.css';
import { fetchCalendarData } from '../../services/api';

type  CalendarEvent = {
  date: string;
  event: string;
}

const Calendar: React.FC = () => {
  const [calendarData, setCalendarData] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    fetchCalendarData().then(data => setCalendarData(data));
  }, []);

  return (
    <div className="calendar">
      <h2>カレンダー</h2>
      <ul>
        {calendarData.map((event, index) => (
          <li key={index}>
            <strong>{event.date}</strong>: {event.event}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Calendar;