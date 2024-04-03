import React from 'react';
import { svgShapes } from './ShapesAndSize';
import mountainsImage from './mountains.jpg';

    function Card({ card, onCardClick }) {
        const getContent = () => {
          if (card.state === 'hidden') {
            return <img src={mountainsImage} alt="Hidden Card" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />;
          } else {
            const SvgShape = svgShapes[card.type];
      return <div className="svg-container">{SvgShape}</div>;
          }
        };
      
  
    return (
      <div className={`eachCard ${card.state}`} onClick={() => onCardClick(card.id)}>
        {getContent()}
      </div>
    );
    }

export default Card;