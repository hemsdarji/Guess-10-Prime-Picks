import React from 'react';

const InputChange = ({ guess, setGuess, handleGuess }) => {
  return (
    <div>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Enter your guess"
      />
      <button onClick={handleGuess}>Guess</button>
    </div>
  );
}

export default InputChange;