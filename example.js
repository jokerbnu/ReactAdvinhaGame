import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const Mostrar1 = props => {
  return <p>{props.i}</p>;
};

function App() {
  const [i, setI] = useState(1);

  const increment = () => {
    setI(i + 1);
  };

  return (
    <div className="App">
      <h1>Hello </h1>
      <button onClick={increment}>Incrementar</button>
      <Mostrar1 i={i} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
