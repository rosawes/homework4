import { useState, useEffect, useCallback } from "react";
import Board from "./Board";
import Panel from "./Panel";
import EndDialog from "./EndDialog";
import { svgShapes, boardSizes } from "./ShapesAndSize";
import "./App.css";
import mountainsImage from "./mountains.jpg";
import lakeImage from "./lake.jpg";

function App() {
  const [cards, setCards] = useState([]);
  const [boardSize, setBoardSize] = useState(null);
  const [chosenCards, setChosenCards] = useState([]);
  const [currentRound, setCurrentRound] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [image, setImage] = useState(lakeImage);

  const images = [];

  images.push({
    onClick: () => setImage(lakeImage),
    text: "Lake",
  });
  images.push({
    onClick: () => setImage(mountainsImage),
    text: "Mountains",
  });

  useEffect(() => {
    if (boardSize) {
      initializeGame(boardSize);
    }
  }, [boardSize]);

  const initializeGame = useCallback((selectedSize) => {
    if (!boardSizes[selectedSize]) return;

    const { rows, cols } = boardSizes[selectedSize];
    const totalPairs = (rows * cols) / 2;
    let selectedShapes = shuffle(Object.keys(svgShapes)).slice(0, totalPairs);
    let gameCards = shuffle([...selectedShapes, ...selectedShapes]).map(
      (shapeIndex, index) => ({
        id: index,
        type: parseInt(shapeIndex),
        state: "hidden",
      })
    );

    setCards(gameCards);
    setCurrentRound(0);
    setGameOver(false);
  }, []);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleCardClick = (id) => {
    console.log(chosenCards);
    if (chosenCards.length >= 2 || cards[id].state !== "hidden") {
      return;
    }

    const newChosenCards = [...chosenCards, { ...cards[id], state: "chosen" }];
    updateCardsState(id, "chosen");
    setChosenCards(newChosenCards);

    if (newChosenCards.length === 2) {
      checkForMatch(newChosenCards);
    }
  };

  const updateCardsState = (id, newState) => {
    const updateCards = cards.map((card) =>
      card.id === id ? { ...card, state: newState } : card
    );
    setCards(updateCards);
  };

  const checkForMatch = (chosenCards) => {
    const [firstCard, secondCard] = chosenCards;

    if (firstCard.type === secondCard.type) {
      // It's a match
      const updatedCards = cards.map((card) => {
        if (card.id === firstCard.id || card.id === secondCard.id) {
          return { ...card, state: "revealed" };
        }
        return card;
      });
      setCards(updatedCards);
      setChosenCards([]);
      if (updatedCards.every((card) => card.state === "revealed")) {
        // Game over
        setGameOver(true);
      }
    } else {
      setTimeout(() => {
        setCards((prevCards) =>
          prevCards.map((card) => {
            if (card.id === firstCard.id || card.id === secondCard.id) {
              return { ...card, state: "hidden" };
            }
            return card;
          })
        );
        setChosenCards([]);
      }, 1000);
    }

    setCurrentRound((prevRound) => prevRound + 1);
  };

  const onRestartGame = () => {
    setBoardSize(null);
    //initializeGame();
  };

  return (
    <div className="game-container">
      {!boardSize ? (
        <div className="boardSizeSelection">
          {Object.keys(boardSizes).map((sizeKey) => (
            <button key={sizeKey} onClick={() => setBoardSize(sizeKey)}>
              {boardSizes[sizeKey].rows} x {boardSizes[sizeKey].cols}
            </button>
          ))}
        </div>
      ) : (
        <>
          <Panel
            currentRound={currentRound}
            onRestart={onRestartGame}
            imageOptions={images}
          />
          <div className="game-board">
            <Board
              cardsPerRow={boardSizes[boardSize].cols}
              cards={cards}
              onCardClick={handleCardClick}
              image={image}
            />
            {gameOver && <EndDialog onRestart={onRestartGame} />}
          </div>
        </>
      )}
    </div>
  );
}
export default App;
