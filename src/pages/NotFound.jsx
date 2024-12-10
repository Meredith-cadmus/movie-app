import React from "react";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-gray-300 px-4">
      {/* Icon or Illustration */}
      <div className="text-center mb-8">
        <h1 className="text-8xl font-bold text-red-600">404</h1>
        <p className="text-2xl font-semibold mt-4">Page Not Found</p>
        <p className="text-gray-400 mt-2">
          Oops! It seems like the page you're looking for is missing.
        </p>
      </div>

      {/* Fun Movie-Themed Text */}
      <p className="text-lg text-gray-400 italic mb-6">
        "It’s not the end of the reel, just a misplaced scene."
      </p>

      {/* Navigation Options */}
      <div className="flex space-x-4">
        <button
          onClick={() => (window.location.href = "/")}
          className="bg-red-600 text-white px-6 py-2 rounded-lg shadow-lg hover:bg-red-700 transition"
        >
          Reload Page
        </button>
        <button
          onClick={() => (window.location.href = "/movie")}
          className="bg-gray-700 text-gray-300 px-6 py-2 rounded-lg shadow-lg hover:bg-gray-600 transition"
        >
          Browse Movies
        </button>
      </div>
    </div>
  );
};

export default NotFound;
