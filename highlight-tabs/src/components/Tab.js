import React, { useState } from "react";

export default function Tab({ children }) {
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