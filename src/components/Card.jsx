import React, { useState } from 'react';
import './Card.css'; // Importe o arquivo CSS para estilização do Card

const Card = ({ imageUrl, title, description, openImage }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`card ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => openImage(imageUrl)} // Passa a URL da imagem para openImage
    >
      <div
        className="card-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className={`card-content ${isHovered ? 'visible' : ''}`}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;

