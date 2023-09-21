import { useState, useEffect } from "react";
import "../App.css";

const Countdown = () => {
  const [count, setCount] = useState(10);
  const [isPaused, setIsPaused] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  // Start the countdown timer when isRunning becomes true
  useEffect(() => {
    console.log("count",count);   
    if (isRunning && !isPaused && count > 0) {
      const interval = setInterval(() => {
        setCount((prev) => prev - 1);
      }, 1000);

      // Clear the interval when the component unmounts or when isRunning becomes false
      return () => clearInterval(interval);
    }
    
  }, [count, isPaused, isRunning]);

  // Handle the Countdown/Reset click
  const handleCountdownClick = () => {
    if (isRunning) {
      // If running, reset the countdown
      setIsRunning(false);
      setCount(10);
    } else {
      // If not running, start the countdown
      setIsRunning(true);
    }
  };

  // Pause the countdown when the mouse enters the countdown area
  const handleMouseEnter = () => {
    if (count < 10) {
      // For first click, ignore the mouseHover
      setIsPaused(true);
    }
  };

  // Resume the countdown when the mouse leaves the countdown area
  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCountdownClick}
    >
      
      {isRunning ? (
        isPaused && count > 0 ? (
          <button>Paused...</button>
        ) : (
          <button>{count}</button>
        )
      ) : (
        <button>Start timer</button>
      )}
    </div>
  );
};

export default Countdown;
