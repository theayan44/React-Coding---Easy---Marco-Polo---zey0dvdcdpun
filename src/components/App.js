import React, { useState } from "react";
import "../styles/App.css";
const App = () => {
  const [text, setText] = useState("Marco");
  const [buttonText, setButtonText] = useState("Polo");
  const handleClick = () => {
    text === "Marco" ? setText("Polo") : setText("Marco");
    buttonText === "Marco" ? setButtonText("Polo") : setButtonText("Marco");
  };
  return (
    <div id="main">
      <h1 id="marco-polo">{text}</h1>
      <button id="marco-polo-toggler" onClick={handleClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default App;
