import { useState } from "react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  const appStyle = {
    backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
    color: darkMode ? "#ffffff" : "#000000",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    transition: "all 0.3s ease"
  };

  return (
    <div style={appStyle}>
      <h1>{darkMode ? "🌙 Chế độ tối" : "🌞 Chế độ sáng"}</h1>
      <button onClick={toggleMode}>
        Chuyển sang {darkMode ? "chế độ sáng" : "chế độ tối"}
      </button>
    </div>
  );
}
