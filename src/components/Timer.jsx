import React, { useState, useEffect } from 'react';

export default function Timer() {

    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    let intervalId; // biến để lưu ID của interval

    useEffect(() => {
        if (isRunning) {
            intervalId = setInterval(() => {
                setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000)
        } else {
            clearInterval(intervalId)
        }
        return () => clearInterval(intervalId); //cleanUp function 
    }, [isRunning])

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    }

    const resetTimer = () => {
        setSeconds(0);
        setIsRunning(false);
        clearInterval(intervalId);  
    }

    const divStyle = {
        backgroundColor:'lightBlue',
        padding: '20px',
        textAlign: 'center',

      };
    
    return (
        <div style={divStyle}>
            <h1>Đồng hồ đếm giờ</h1>
            <p>Thời gian đã trôi qua: {seconds} giây</p>
            <button onClick={toggleTimer}>
                {isRunning ? 'Dừng' : 'Bắt đầu'}
            </button>

            <button onClick={resetTimer}>Đặt lại</button>
        </div>
    )

}