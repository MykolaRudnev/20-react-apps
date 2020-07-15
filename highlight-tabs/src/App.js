import React, { useState } from "react";
import "./App.css";

function Tab({ children }) {
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });

  function moveHighligt(e) {
    // update highlightStyle to  move  highlight
    setHighlightStyle({
      left: e.nativeEvent.layerX - 150,
    });
  }

  function hideHighlight(e) {
    setHighlightStyle({
      opacity: 0,
      left: e.nativeEvent.layerX - 150,
    });
  }

  return (
    <div className="tab" onMouseOut={hideHighlight} onMouseMove={moveHighligt}>
      <div className="highlight" style={highlightStyle} />
      {children}
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <div className="browser">
        <div className="tabs">
          <Tab>
            <a>Home</a>
          </Tab>
          <Tab>
            <a>About</a>
          </Tab>
          <Tab>
            <a>Features</a>
          </Tab>
        </div>
        <div className="viewport">Pages Go Here</div>
      </div>
    </div>
  );
}

export default App;
