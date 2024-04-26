import React, { useState } from 'react';
import './FireworksButton.css'; // Estilo para a animação

const FireworksButton = () => {
  const [showFireworks, setShowFireworks] = useState(false);

  const handleClick = () => {
    setShowFireworks(true);
    setTimeout(() => setShowFireworks(false), 4000); // Define o tempo para remover a animação após 4 segundos
  };

  const renderFireworks = () => {
    const fireworks = [];
    const numFireworks = 10; // Número de fogos de artifício

    for (let i = 0; i < numFireworks; i++) {
      const style = {
        left: `${Math.random() * 100}%`, // Posição horizontal aleatória
        animationDelay: `${Math.random() * 2}s`, // Atraso aleatório na animação
      };
      fireworks.push(<div className="fireworks" key={i} style={style}></div>);
    }

    return fireworks;
  };

  return (
    <div className="fireworks-container">
      <button className="fireworks-button" onClick={handleClick}>
        Clique para fogos de artifício!
      </button>
      {showFireworks && (
        <div>
          {renderFireworks()}
          <div className="explosion"></div>
        </div>
      )}
    </div>
  );
};

export default FireworksButton;
