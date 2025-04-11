// import React from 'react'
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <h1 className="text-6xl font-bold text-black mb-4">404</h1>
      <p className="text-2xl text-gray-800 mb-2">Page Not Found</p>
      <p className="text-gray-500 mb-6">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Go back home
      </Link>
    </div>
  );
};
