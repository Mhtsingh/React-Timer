import { useState, useEffect } from "react";
import "../App.css";

const Countdown = () => {
  const [count, setCount] = useState(10);
  const [isPaused, setIsPaused] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  // Start the countdown timer when isRunning becomes true
  useEffect(() => {
    if (isRunning && !isPaused && count > 0) {
      const interval = setInterval(() => {
        setCount(count - 1);
      }, 1000);

      // Clear the interval when the component unmounts or when isRunning becomes false
      return () => clearInterval(interval);
    }
    
  }, [count, isPaused, isRunning]);

  // Handle the Countdown/Reset click
  const handleBtnClick = () => {
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
      setIsPaused(true);
  };

  // Resume the countdown when the mouse leaves the countdown area
  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <>
    <h1>Click to Start Countdown</h1>
    <div className="countDown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleBtnClick}
    >
    
      {isRunning ? (
        isPaused && count > 0 ? (
          <button className="pausedBtn">Paused...</button>
        ) : (
          <button>{count}</button>
        )
      ) : (
        <button>Start timer</button>
      )}
    </div>
    </>
  );
};

export default Countdown;
