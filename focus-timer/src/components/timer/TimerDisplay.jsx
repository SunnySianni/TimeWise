import React from 'react';
import Card from '../common/Card';

const TimerDisplay = ({ minutes, seconds }) => {
  return (
    <Card>
      <h1 className="text-4xl font-bold text-pink-500">
        {`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}
      </h1>
    </Card>
  );
};

export default TimerDisplay;
