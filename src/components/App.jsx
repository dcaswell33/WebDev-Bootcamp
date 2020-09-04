import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");
  const [buttonStyle, setButtonStyle] = useState("white");

  function handleClick() {
    setHeadingText("Submitted");
  }

  function mouseOver() {
    setButtonStyle("black");
  }

  function mouseOut() {
    setButtonStyle("white");
  }

  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        onClick={handleClick}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
        style={{ backgroundColor: buttonStyle }}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
