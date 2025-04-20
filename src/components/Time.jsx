import React, { useState, useEffect } from 'react';

export default function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000)

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  // Empty dependency array means this effect runs only once after the initial render
  }, [])
  // Empty dependency array means this effect runs only once after the initial render

  return (
    <div>
      <h1>Current Time:</h1>
      <p>{currentTime.toLocaleTimeString()}</p>
    </div>
  );
}