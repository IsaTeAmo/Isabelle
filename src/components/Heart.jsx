import React, { useState } from 'react';

const Heart = () => (
    <div className='heart'></div>
);

const HeartButton = () => {
  const [showHeart, setShowHeart] = useState(false);

  const handleClick = () => {
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 1000); // hide after 1 second
  };

  return (
    <div>
      <button onClick={handleClick}>Clique aqui!</button>
      {showHeart && <Heart />}
    </div>
  );
};

export default HeartButton; // Certifique-se de exportar o componente HeartButton como default
