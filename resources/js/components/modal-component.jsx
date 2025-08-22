import React from "react";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-lg shadow-lg w-11/12 sm:w-1/2 p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✖
        </button>

        {/* Modal Content */}
        <h2 className="text-2xl font-bold mb-4 text-center">Welcome to Epathways!</h2>
        <p className="text-gray-600 text-center">
          Book now for a pre-assessment
        </p>

        <div className="mt-6 flex justify-center">
          <a href="/booking" className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700">
            Book Now!
          </a>
          {/* <button
            onClick={onClose}
            className="bg-green-800 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Book Now!
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
