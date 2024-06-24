import React, { useState } from 'react';
import ErrorPopup from '../components/ErrorPopup';
import Timer from '../components/Timer';

const NumberGuesser = () => {
    const [guess, setGuess] = useState('');
    const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
    const [message, setMessage] = useState('');
    const [showError, setShowError] = useState(false);
    const [timer, setTimer] = useState(false);
    const [actionCount, setActionCount] = useState(0);
    const [maxActions, setMaxActions] = useState(5)
    const [remainingTries, setremainingTries] = useState(5)

    // const remainingTries = maxActions - actionCount;


    const handleTimeout = () => {
        setremainingTries(5);
        setTimer(false)
    };


    const handleEvent = () => {
        setShowError(true);
        if (actionCount < maxActions) {
            setActionCount(actionCount + 1);
        } else {
            setTimer(true);
        }
    };

    const closeError = () => {
        setShowError(false);
    };

    function generateRandomNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    function handleGuess(e) {
        e.preventDefault();
        const userGuess = parseInt(guess);

        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            setMessage('Please enter a valid number between 1 and 100.');
        } else if (userGuess < randomNumber) {
            setMessage('Too low! Try a higher number.');
            setremainingTries(maxActions - actionCount)
        } else if (userGuess > randomNumber) {
            setMessage('Too high! Try a lower number.');
            setremainingTries(maxActions - actionCount)
        } else {
            setMessage(`Congratulations! You guessed the number ${randomNumber} correctly.`);
            setRandomNumber(generateRandomNumber());
            setGuess('');
            setremainingTries(0)
        }
    }


    return (
        <div className="max-w-md mx-auto my-10 p-6 bg-white border border-gray-300 shadow-lg rounded-md">
            <h1 className="text-2xl font-bold mb-4">Number Guesser Game</h1>
            <p>Remaining tries: {remainingTries}</p>
            <form onSubmit={handleGuess}>
                <input
                    type="number"
                    className="border border-gray-300 rounded px-3 py-2 mb-4 w-full"
                    placeholder="Enter your guess (1-100)"
                    value={guess}
                    onChange={(e) => setGuess(e.target.value)}
                />
                <button
                    type="submit"
                    className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ${
                        timer ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
                      } transition duration-300`}
                    onClick={handleEvent}
                >
                    {timer ? 'Button Disabled' : 'Guess'}
                </button>
            </form>
            {showError && (
                <ErrorPopup
                    message={message}
                    onClose={closeError}
                />
            )}
            {timer && (
                <>
                    <Timer duration={3} onTimeout={handleTimeout} />
                </>)}
        </div>
    );
};

export default NumberGuesser;