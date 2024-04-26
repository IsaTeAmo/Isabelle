import '../App.css';
import Card from '../components/Card';
import React, { useState } from 'react';


function Painel(){
    const importAll = (r) => r.keys().map(r);
    const images = importAll(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));

    const titles = ['Te Amo', 'Te amo demais', 'Te amo muito', 'Sou perdidamente apaixonado', 'Sou Louco por voce']; // Vetor predefinido de títulos

    const getRandomTitle = () => {
      return titles[Math.floor(Math.random() * titles.length)]; // Seleciona aleatoriamente um título do vetor
    };

    const cardData = images.map((image, index) => ({
        
        imageUrl: image,
        title: getRandomTitle(),
        description: `Isabelle`,
    }));

    const [isImageOpen, setIsImageOpen] = useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = useState('');


    const openImage = (imageUrl) => {
        setSelectedImageUrl(imageUrl); // Armazena a URL da imagem selecionada
        setIsImageOpen(true);
      };

    const closeImage = () => {
        setIsImageOpen(false);
    };

    
    return (
        <div className={`card-grid ${isImageOpen ? 'image-open' : ''}`}>
        {cardData.map((card, index) => (
          <Card key={index} {...card} openImage={openImage} />
        ))}
        {isImageOpen && (
          <div className="modal" onClick={closeImage}>
            <div className="modal-content">
              <span className="close" onClick={closeImage}>&times;</span>
              <img src={selectedImageUrl} alt="Imagem" /> {/* Exibe a imagem selecionada */}
            </div>
          </div>
        )}
      </div>
    );
}

export default Painel;