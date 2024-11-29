import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    if (difference > 0) {
      return {
        totalSeconds: Math.floor(difference / 1000),
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return { totalSeconds: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const bgColor =
    timeLeft.totalSeconds <= 60
      ? "bg-red-700"
      : timeLeft.totalSeconds <= 300
      ? "bg-yellow-500"
      : "bg-red-500";

  return (
    <div className={`${bgColor} fixed bottom-4 left-1/2 transform -translate-x-1/2  text-white p-4 rounded-md shadow-lg flex flex-col md:flex-row items-center justify-between transition-colors duration-500 ease-in-out z-50 w-11/12 max-w-72 ld:max-w-[60rem]`}>
      <h1 className="text-lg font-semibold mb-2">Tu descuento se termina en:</h1>
      <div className="flex space-x-4 text-center">
        <div>
          <p className="text-4xl font-bold transition-all duration-500 ease-linear">
            {timeLeft.days.toString().padStart(2, "0")}
          </p>
          <p className="text-sm">DÍAS</p>
        </div>
        <div>
          <p className="text-4xl font-bold transition-all duration-500 ease-linear">
            {timeLeft.hours.toString().padStart(2, "0")}
          </p>
          <p className="text-sm">HRS</p>
        </div>
        <div>
          <p className="text-4xl font-bold transition-all duration-500 ease-linear">
            {timeLeft.minutes.toString().padStart(2, "0")}
          </p>
          <p className="text-sm">MIN</p>
        </div>
        <div>
          <p className="text-4xl font-bold transition-all duration-500 ease-linear">
            {timeLeft.seconds.toString().padStart(2, "0")}
          </p>
          <p className="text-sm">SEC</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;