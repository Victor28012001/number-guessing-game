import React, { useState, useEffect } from 'react';

const Timer = ({ duration, onTimeout }) => {
  const [seconds, setSeconds] = useState(duration);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onTimeout(); // Perform action on timeout
    }
  }, [seconds, onTimeout]);

  // Format seconds into minutes and seconds
  const formattedTime = `${Math.floor(seconds / 60)
    .toString()
    .padStart(2, '0')}:${(seconds % 60).toString().padStart(2, '0')}`;

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Countdown Timer</h1>
      <p className="text-2xl">{formattedTime}</p>
    </div>
  );
};

export default Timer;
