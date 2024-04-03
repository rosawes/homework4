import React from 'react';
import Card from './Card';

function Board({ cards, onCardClick }) {
  return (
    <div className="game" id="board">
      {cards.map((card, index) => (
        <Card key={index} card={card} onCardClick={onCardClick} />
      ))}
    </div>
  );
}

export default Board;