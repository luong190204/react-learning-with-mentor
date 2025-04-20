import React, {useState} from 'react';

export default function ClickCounter() {

    const [clickCount, setClickCount] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('white');
  
      const handleClick = () => {
          const newCount = clickCount + 1;
          setClickCount(newCount);
  
          if (newCount > 5) {
              setBackgroundColor('lightblue');
          }
  
          if (newCount > 10) {
              setClickCount(0);
              setBackgroundColor('white');
          }
      }
    
      const divStyle = {
        backgroundColor,
        padding: '20px',
        textAlign: 'center',
      };
      

      return (
          <div style={divStyle}>
              <h1>Số lần bấm: {clickCount}</h1>
              <button onClick={handleClick}>Bấm vào đây</button>
          </div>
      ) 
}