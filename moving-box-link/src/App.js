import React, { useEffect, useRef, useState } from 'react';
import './App.css';

export default function App() {
  const canvasRef = useRef(null);
  const [x, setX] =useState(0);
  const [y, setY] =useState(0);

  //set the height and width of canvas
  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    context.canvas.height = window.innerHeight;
    context.canvas.width = window.innerWidth;
  }, [])

  //move the cox if x or changes
  useEffect(() => {
    const context = canvasRef.current.getContext('2d');
    context.clearRect(0,0, window.innerHeight, window.innerWidth);
    context.fillRect(x,y,100,100);
  }, [x,y]);


  return (
    <div className="app">
      <canvas ref={canvasRef} />

      <div className="arrows">
        <button onClick={() => setY(y => y - 25)}>Up</button>
        <button onClick={() => setX(x => x - 25)}>Left</button>
        <button onClick={() => setY(y => y + 25)}>Down</button>
        <button onClick={() => setX(x => x + 25)}>Right</button>
      </div>

      <div className="images">
        <img src="https://i.imgur.com/JYUB0m3.png" alt="Down" />
        <img src="https://i.imgur.com/GEXD7bk.gif" alt="Right" />
        <img src="https://i.imgur.com/XSA2Oom.gif" alt="Up" />
        <img src="https://i.imgur.com/4LGAZ8t.gif" alt="Left" />
      </div>
    </div>
  );
}
