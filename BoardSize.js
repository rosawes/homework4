import React from 'react';
function BoardSize({ onSelectSize }) {
    return (
      <div className="boardSize">
        <button onClick={() => onSelectSize('small')}>3 x 4</button>
        <button onClick={() => onSelectSize('medium')}>4 x 6</button>
        <button onClick={() => onSelectSize('large')}>5 x 6</button>
      </div>
    );
  }
  export default BoardSize;