import React from "react";
import Card from "./Card";

function Board({ cards, onCardClick, image, cardsPerRow }) {
  const allCards = [];

  for (let i = 0; i < cards.length; i += cardsPerRow) {
    allCards.push(cards.slice(i, i + cardsPerRow));
    //cards[i:i+cardsperrow]
  }

  return (
    <div className="game" id="board">
      {allCards.map((cards, row) => (
        <div className="cardRow">
          {cards.map((card, col) => (
            <Card
              key={col + row * cardsPerRow}
              card={card}
              image={image}
              onCardClick={onCardClick}
            />
          ))}
        </div>
      ))}
      {/* {cards.map(
        (card, index) => (
        <Card key={index} card={card} image={image} onCardClick={onCardClick} />
      )
      )} */}
    </div>
  );
}

export default Board;
