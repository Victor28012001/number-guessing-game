import React, { useState } from 'react';

const ActionLimiter = ({ maxActions, onAction }) => {
  const [actionCount, setActionCount] = useState(0);

  const handleAction = () => {
    if (actionCount < maxActions) {
      onAction();
      setActionCount(actionCount + 1);
    } else {
      alert(`You have reached the maximum limit of ${maxActions} actions.`);
      // Optionally, you can handle what happens when the limit is reached
    }
  };

  const remainingTries = maxActions - actionCount;

  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Action Limiter</h1>
      <p>Remaining tries: {remainingTries}</p>
      <button
        onClick={handleAction}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4 transition duration-300"
      >
        Perform Action
      </button>
    </div>
  );
};

export default ActionLimiter;
