import { useEffect, useState } from "react";

export default function Quote() {
  const quotes = [
    "Cuộc sống không phải là tìm kiếm bản thân. Cuộc sống là tạo ra chính mình. - George Bernard Shaw",
    "Thành công không phải là chìa khóa của hạnh phúc. Hạnh phúc là chìa khóa của thành công. Nếu bạn yêu thích những gì bạn đang làm, bạn sẽ thành công. - Albert Schweitzer",
    "Hạnh phúc không phải là một trạm đến, mà là một cách đi. - Margaret Lee Runbeck",
    "Hãy là sự thay đổi mà bạn muốn thấy trên thế giới. - Mahatma Gandhi",
    "Cách tốt nhất để dự đoán tương lai là tạo ra nó. - Peter Drucker",
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes);
  const [isRunning, setIsRunning] = useState(true);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setCurrentQuote(quotes[randomIndex]);
    }, 1000);

    return () => clearInterval(interval); // interval nằm cùng scope, không bị lệch
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <div>
      <div
        style={{
          fontSize: "1.2em",
          padding: "20px",
          border: "1px solid #ccc",
          marginBottom: "10px",
        }}
      >
        {currentQuote}
      </div>
      {isRunning ? (
        <button onClick={handleStop}>Dừng</button>
      ) : (
        <button onClick={handleStart}>Tiếp tục</button>
      )}
    </div>
  );
}
