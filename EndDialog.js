import React from 'react';

function EndDialog({ onRestart }) {
  return (
    <div className="endDialog">
      <div className="dialogContent">
        <h2>Congratulations!</h2>
        <p>You've completed the game.</p>
        <button onClick={onRestart} id="restartButton">Play Again</button>
      </div>
    </div>
  );
}

export default EndDialog;