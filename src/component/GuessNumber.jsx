import React, { useState } from 'react';
import InputChange from './InputChange';


const GuessNumber = () => {
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');
 
  const targetNumber = Math.floor(Math.random() * 10) + 1;

  const handleGuess = () => {
    const numGuess = parseInt(guess);
    const diff = numGuess - targetNumber;

    setMessage(
      isNaN(numGuess)
        ? 'Please enter a valid number.'
        : diff === 0
        ? 'Congratulations! You guessed the correct number.'
        : diff < 0
        ? 'Try a higher number.'
        : 'Try a lower number.'
    );}

  return (
  
    <div className="container">
      <div className="game card p-3">
        <h1 className="mb-3">Guess the Number</h1>
        <InputChange guess={guess} setGuess={setGuess} handleGuess={handleGuess} />
        <p className="message mb-3">{message}</p>
        
          
        </div>
       
      </div>
  
  );
}

export default GuessNumber;
