import { useEffect, useState } from "react";

const Timer = ({ duration = 30, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp && onTimeUp();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <div className="bg-zinc-800 px-6 py-3 rounded-xl text-white text-lg font-medium shadow-md">
      ⏱ {timeLeft}s
    </div>
  );
};

export default Timer;
