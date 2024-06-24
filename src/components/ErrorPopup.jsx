import React from 'react';

const ErrorPopup = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Error</h2>
        <p className="text-red-500 mb-4">{message}</p>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ErrorPopup;
