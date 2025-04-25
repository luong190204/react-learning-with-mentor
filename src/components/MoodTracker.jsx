import { useState, useEffect } from "react";

export default function MoodTracker() {
  const [mood, setMood] = useState(4);

  useEffect(() => {
    const interval = setInterval(() => {
      setMood(4);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  const moodIcons = ["😊", "😢", "😴", "🤩", "😐"];
  const moodDescriptions = ["happy", "sad", "tired", "excited", "neutral"];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>How are you feeling today?</h2>
      <h1>Mood Tracker</h1>
      <div
        style={{
          fontSize: "100px",
          margin: "20px",
          transition: "transform 0.5s ease",
          transform: "scale(1.2)",
        }}
      >
        {moodIcons[mood]}
      </div>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        You are feeling {moodDescriptions[mood]}
      </p>
      <div>
        <button onClick={() => setMood(0)}>happy</button>
        <button onClick={() => setMood(1)}>Sad</button>
        <button onClick={() => setMood(2)}>Tired</button>
        <button onClick={() => setMood(3)}>Excited</button>
      </div>
    </div>
  );
}
