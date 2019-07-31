import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  // ENTRADA, RODANDO, FIM
  const [estado, setEstado] = useState("ENTRADA");
  const [palpite, setPalpite] = useState(150);
  const [numPalpite, setNumPalpite] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setMin(0);
    setMax(300);
    setNumPalpite(1);
    setPalpite(150);
    setEstado("RODANDO");
  };

  if (estado == "ENTRADA") {
    return (
      <div className="App">
        <button onClick={iniciarJogo}>Começar a jogar!</button>
      </div>
    );
  } else if (estado == "FIM") {
    return (
      <div className="App">
        <p>
          Acertou o número {palpite} com {numPalpite} chutes!
        </p>
        <button onClick={iniciarJogo}>Iniciar novamente</button>
      </div>
    );
  }

  const menor = () => {
    setNumPalpite(numPalpite + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumPalpite(numPalpite + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  // 0 à 300
  return (
    <div className="App">
      <p>O seu numero é {palpite}?</p>
      <p>
        Min: {min} / Máx: {max}
      </p>
      <button onClick={menor}>Menor</button>
      <button onClick={acertou}>Acertou</button>
      <button onClick={maior}>Maior</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
