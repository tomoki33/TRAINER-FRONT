import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ProgressGraph: React.FC = () => {
  const data = [
    { date: '2024-10-01', weight: 70, bodyFat: 20 },
    { date: '2024-10-08', weight: 69, bodyFat: 19.5 },
    { date: '2024-10-15', weight: 68.5, bodyFat: 19 },
    // 他のデータ...
  ];

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="weight" stroke="#8884d8" />
        <Line type="monotone" dataKey="bodyFat" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ProgressGraph;
