import React, { useEffect, useRef, useState } from "react";
import "./App.css";

export default function App() {
  const canvasRef = useRef(null);
  const linkDownRef = useRef(null); 
  const linkUpRef = useRef(null); 
  const linkRightRef = useRef(null); 
  const linkLeftRef = useRef(null); 
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [direction, setDirection] = useState('down');

  //set the height and width of canvas
  useEffect(() => {
 
  }, []);

  //move the cox if x or changes
  useEffect(() => {
    const context = canvasRef.current.getContext("2d");
    context.clearRect(0, 0, window.innerHeight, window.innerWidth);

    let theLinkRef
    if(direction === 'down') theLinkRef = linkDownRef;
    if(direction === 'up') theLinkRef = linkUpRef;
    if(direction === 'left') theLinkRef = linkLeftRef;
    if(direction === 'right') theLinkRef = linkRightRef;

    context.drawImage(theLinkRef.current, x, y);
  }, [x, y]);

  //add event listener to the window to listener  for arrow kyes
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    function handleKeyDown(e) {
      if (e.key === "ArrowUp") move("up");
      if (e.key === "ArrowLeft") move("left");
      if (e.key === "ArrowDown") move("down");
      if (e.key === "ArrowRight") move("right");
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function move(dir) {
    setDirection(dir);
    if (dir === "up")   setY((y) => y - 25);
    if (dir === "left") setX((x) => x - 25);
    if (dir === "down") setY((y) => y + 25);
    if (dir === "right")setX((x) => x + 25);
  }

  return (
    <div className="app">
      <canvas ref={canvasRef} />

      <div className="arrows">
        <button onClick={() => move("up")}>Up</button>
        <button onClick={() => move("left")}>Left</button>
        <button onClick={() => move("down")}>Down</button>
        <button onClick={() => move("right")}>Right</button>
      </div>

      <div className="images">
        <img ref={linkDownRef} 
        src="https://i.imgur.com/JYUB0m3.png" 
        alt="Down" />
        <img 
        ref={linkRightRef} 
        src="https://i.imgur.com/GEXD7bk.gif" 
        alt="Right" />
        <img 
        ref={linkUpRef} 
        src="https://i.imgur.com/XSA2Oom.gif" 
        alt="Up" />
        <img 
        ref={linkLeftRef} 
        src="https://i.imgur.com/4LGAZ8t.gif" 
        alt="Left" />
      </div>
    </div>
  );
}
